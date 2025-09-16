import { app, BrowserWindow, ipcMain, WebContentsView } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
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

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      webviewTag: true,
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }

  const leftPercentage = 0.2;
  const topPercentage = 0.05;

  const [width, height] = win.getContentSize();
  const topHeight = Math.floor(height * topPercentage);
  const bottomHeight = height - topHeight;
  const leftWidth = Math.floor(width * leftPercentage);
  const rightWidth = width - leftWidth;

  const web = new WebContentsView();

  win.contentView.addChildView(web);
  web.webContents.loadURL("https://google.com");
  web.webContents.zoomLevel = 0;

  web.setBounds({
    x: leftWidth,
    y: topHeight,
    width: rightWidth,
    height: bottomHeight,
  });

  win.on("resize", () => {
    const [newWidth, newHeight] = win!.getContentSize();
    const topHeight = Math.floor(newHeight * topPercentage);
    const bottomHeight = newHeight - topHeight;
    const leftWidth = Math.floor(newWidth * leftPercentage);
    const rightWidth = newWidth - leftWidth;

    web.setBounds({
      x: leftWidth,
      y: topHeight,
      width: rightWidth,
      height: bottomHeight,
    });
  });

  web.webContents.on("did-navigate", (_, url) => {
    win!.webContents.send("link-clicked", url);
  });

  web.webContents.on("did-navigate-in-page", (_, url) => {
    win!.webContents.send("link-clicked", url);
  });

  ipcMain.on("go-back", () => {
    if (web.webContents.navigationHistory.canGoBack()) {
      web.webContents.navigationHistory.goBack();
    }
  });

  ipcMain.on("go-forward", () => {
    if (web.webContents.navigationHistory.canGoForward()) {
      web.webContents.navigationHistory.goForward();
    }
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
