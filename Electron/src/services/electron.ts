const onUrlChange = (listener: ({ url }: { url: string }) => void) => {
  return window.ipcRenderer.on(
    "url:change",
    async (_: Electron.IpcRendererEvent, url: string) => {
      return listener({ url });
    }
  );
};

const openModal = () => {
  return window.ipcRenderer.invoke("modal", true);
};

const closeModal = () => {
  return window.ipcRenderer.invoke("modal", false);
};

const showBrowser = () => {
  return window.ipcRenderer.invoke("web:visible", true);
};

const hideBrowser = () => {
  return window.ipcRenderer.invoke("web:visible", false);
};

export const electron = {
  onUrlChange,
  openModal,
  closeModal,
  showBrowser,
  hideBrowser,
};
