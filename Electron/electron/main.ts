import { app, BrowserWindow, ipcMain, WebContentsView } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import common from "./common.json";
import path from "node:path";

createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, "..");

export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;
const INITIAL_BROWSER_URL = common.initialWeb;

// ------------------------- DISABLE BOTS ----------------------

app.commandLine.appendSwitch("disable-blink-features", "AutomationControlled");
const USER_AGENT = common.userAgent;

function createWindow() {
  let isModalOpen = false;

  // ----------------------- MAIN VIEW --------------------------

  win = new BrowserWindow({
    show: false,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },
  });

  win.maximize();
  win.show();

  // ----------------------- BROWSER WEB ------------------------

  const web = new WebContentsView();

  web.webContents.loadURL(INITIAL_BROWSER_URL, { userAgent: USER_AGENT });
  win.contentView.addChildView(web, 0);

  // ----------------------- HTML -------------------------------

  const html = new WebContentsView({
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      transparent: true,
    },
  });

  // html.webContents.openDevTools({ mode: "undocked" });

  if (VITE_DEV_SERVER_URL) {
    html.webContents.loadURL(VITE_DEV_SERVER_URL);
  } else {
    html.webContents.loadFile(path.join(RENDERER_DIST, "index.html"));
  }

  win.contentView.addChildView(html, 1);

  // ----------------------- FUNCTIONS ---------------------------

  const resizeViews = () => {
    const { width, height } = win!.getContentBounds();

    const leftWidth = 400;
    const rightWidth = width - leftWidth;

    web.setBounds({
      width: rightWidth,
      height: height,
      x: leftWidth,
      y: 0,
    });

    html.setBounds({
      width: isModalOpen ? width : 400,
      height,
      x: 0,
      y: 0,
    });
  };

  resizeViews();

  // -------------------- SCRIPTS --------------------------------

  win.on("resize", resizeViews);

  ipcMain.handle("modal", async (_, isOpen) => {
    isModalOpen = isOpen;
    resizeViews();
  });

  // -------------------- NAVEGACION -----------------------------

  web.webContents.on("did-navigate", (_, url) => {
    win && win.webContents.send("link-clicked", url);
  });

  web.webContents.on("did-navigate-in-page", (_, url) => {
    win && win.webContents.send("link-clicked", url);
  });

  ipcMain.on("go-back", () => {
    if (!web.webContents.navigationHistory.canGoBack()) return;
    web.webContents.navigationHistory.goBack();
  });

  ipcMain.on("go-forward", () => {
    if (!web.webContents.navigationHistory.canGoForward()) return;
    web.webContents.navigationHistory.goForward();
  });
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);
