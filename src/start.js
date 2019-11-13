const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
require("electron-reload");

let tray = null; // 트레이

let topWindow; // 노래 재생을 위한 백그라운드 창, 기본적으로 숨겨져 있다.

let mainWindow; // UI 인터렉션을 위한 메인 윈도우

let appdie = false;

Menu.setApplicationMenu(null); // 애플리케이션 메뉴를 없앤다.

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.setMenu(null);
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.on("close", event => {
    if (appdie) return;
    event.preventDefault(); // 창의 닫힘을 막고
    mainWindow.hide(); // hide 한다.
  });
}

function createWindow() {
  topWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  topWindow.loadURL(`file://${path.join(__dirname, "../worker/entry.html")}`);
  createMainWindow();
}

app.on("ready", createWindow);
app.on("ready", () => {
  tray = new Tray(`${path.join(__dirname, "../assets/icon.png")}`);
  const contextMenu = Menu.buildFromTemplate([
    { id: "open", label: "보기", type: "normal" },
    { type: "separator" },
    { id: "exit", label: "종료", type: "normal" }
  ]);
  contextMenu.getMenuItemById("open").click = function(e) {
    if (mainWindow === null) {
      createMainWindow();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  };

  contextMenu.getMenuItemById("exit").click = function(e) {
    quitApp();
  };

  tray.setToolTip("Naver Vibe Desktop");
  tray.setContextMenu(contextMenu);
  tray.on("click", () => {
    // 메인 윈도우가 죽었을 경우 살려줌.
    if (!mainWindow) {
      createMainWindow();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    quitApp();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

function quitApp() {
  appdie = true;
  mainWindow = null;
  topWindow = null;
  app.quit();
}
