const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {

    const window = new BrowserWindow({
        width: 950,
        height: 850,
        minWidth: 700,
        minHeight: 650,
        title: "FX-991ES PLUS Calculator",
        backgroundColor: "#181818",

        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    window.loadFile("index.html");

}

app.whenReady().then(() => {

    createWindow();

    app.on("activate", () => {

        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }

    });

});

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {
        app.quit();
    }

});
