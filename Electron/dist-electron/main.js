import { app, BrowserWindow, WebContentsView, ipcMain } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      webviewTag: true
    }
  });
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
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
    height: bottomHeight
  });
  win.on("resize", () => {
    const [newWidth, newHeight] = win.getContentSize();
    const topHeight2 = Math.floor(newHeight * topPercentage);
    const bottomHeight2 = newHeight - topHeight2;
    const leftWidth2 = Math.floor(newWidth * leftPercentage);
    const rightWidth2 = newWidth - leftWidth2;
    web.setBounds({
      x: leftWidth2,
      y: topHeight2,
      width: rightWidth2,
      height: bottomHeight2
    });
  });
  web.webContents.on("did-navigate", (_, url) => {
    win.webContents.send("link-clicked", url);
  });
  web.webContents.on("did-navigate-in-page", (_, url) => {
    win.webContents.send("link-clicked", url);
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
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.whenReady().then(createWindow);
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
