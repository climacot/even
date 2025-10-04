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

// ------------------------- VARIABLES -------------------------

let isModalOpen: boolean = false;
let lastUrl: string | undefined;

// ------------------------- DISABLE BOTS ----------------------

app.commandLine.appendSwitch("disable-blink-features", "AutomationControlled");
const USER_AGENT = common.userAgent;

function createWindow() {
  // ----------------------- MAIN VIEW --------------------------

  win = new BrowserWindow({
    show: false,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },
  });

  win.setMenuBarVisibility(false);
  win.maximize();
  win.show();

  // ----------------------- BROWSER WEB ------------------------

  const web = new WebContentsView({
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },
  });

  web.webContents.setUserAgent(USER_AGENT);
  web.webContents.loadURL(INITIAL_BROWSER_URL, { userAgent: USER_AGENT });
  win.contentView.addChildView(web, 0);

  // web.webContents.openDevTools({ mode: "undocked" });

  // ----------------------- NAVIGATION -------------------------

  const navigation = new WebContentsView({
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },
  });

  if (VITE_DEV_SERVER_URL) {
    navigation.webContents.loadURL(VITE_DEV_SERVER_URL + "navigation.html");
  } else {
    navigation.webContents.loadFile(
      path.join(RENDERER_DIST, "navigation.html")
    );
  }

  // navigation.webContents.openDevTools({ mode: "undocked" });

  win.contentView.addChildView(navigation, 1);

  // ----------------------- HTML -------------------------------

  const html = new WebContentsView({
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      transparent: true,
    },
  });

  html.webContents.openDevTools({ mode: "undocked" });

  if (VITE_DEV_SERVER_URL) {
    html.webContents.loadURL(VITE_DEV_SERVER_URL);
  } else {
    html.webContents.loadFile(path.join(RENDERER_DIST, "index.html"));
  }

  win.contentView.addChildView(html, 2);

  // ----------------------- FUNCTIONS ---------------------------

  const resizeViews = () => {
    const { width, height } = win!.getContentBounds();

    const leftWidth = 400;
    const rightWidth = width - leftWidth;
    const topHeight = 40;
    const bottomHeight = height - topHeight;

    navigation.setBounds({
      width: rightWidth,
      height: topHeight,
      x: leftWidth,
      y: 0,
    });

    web.setBounds({
      width: rightWidth,
      height: bottomHeight,
      x: leftWidth,
      y: topHeight,
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

  // -------------------- MODAL ----------------------------------

  web.webContents.on("did-navigate", (_, url) => {
    if (lastUrl === url) return;

    lastUrl = url;

    html.webContents.send("url:change", url);
  });

  web.webContents.on("did-navigate-in-page", (_, url) => {
    if (lastUrl === url) return;

    lastUrl = url;

    html.webContents.send("url:change", url);
  });

  ipcMain.on("modal", (_, isOpen) => {
    isModalOpen = isOpen;
    resizeViews();
  });

  // -------------------- CAPTURAS --------------------------------

  web.webContents.on("did-finish-load", () => {
    web.webContents.executeJavaScript(`
      (function() {
        document.addEventListener("click", (e) => {
          const tag = e.target.tagName.toLowerCase();
          window.ipcRenderer.send("counter:clicks", tag);
        });
      })();
    `);
  });

  ipcMain.on("counter:clicks", () => {});

  // -------------------- NAVEGACION ------------------------------

  web.webContents.setWindowOpenHandler(({ url }) => {
    web.webContents.loadURL(url);
    return { action: "deny" };
  });  

  web.webContents.on("did-start-loading", () => {
    navigation.webContents.send("browser:loading", true);
  });

  web.webContents.on("did-stop-loading", () => {
    navigation.webContents.send("browser:loading", false);
  });

  ipcMain.on("go-home", () => {
    web.webContents.navigationHistory.goToIndex(0);
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
