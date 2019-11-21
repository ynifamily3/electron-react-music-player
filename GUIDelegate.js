const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
require("electron-reload");

let tray = null; // 트레이
let mainWindow; // UI 인터렉션을 위한 메인 윈도우

let appdie = false; // 앱이 종료되는 플래그
// Menu.setApplicationMenu(null); // 애플리케이션 메뉴를 없앤다. (단축키가 안되서 주석처리)

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    title: "VIBE",
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.setMenu(null);
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "./build/index.html")}`
  );

  mainWindow.on("close", event => {
    console.log(event);
    if (appdie) return;
    event.preventDefault(); // 창의 닫힘을 막고
    mainWindow.hide(); // hide 한다.
  });
}

function createTray() {
  tray = new Tray(`${path.join(__dirname, "./assets/icon-19x19.png")}`);
  
  const contextMenu = Menu.buildFromTemplate([
    { id: "open", label: "VIBE 열기", type: "normal" },
    { type: "separator" },
    { id: "exit", label: "종료", type: "normal" }
  ]);
  
  contextMenu.getMenuItemById("open").click = function(e) {
    if (!mainWindow) {
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
};

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    quitApp();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();
  } else {
    mainWindow.show();
    mainWindow.focus();
  }
});

app.on("ready", createMainWindow);
app.on("ready", createTray);

function quitApp() {
  appdie = true;
  mainWindow = null;
  app.quit();
}
