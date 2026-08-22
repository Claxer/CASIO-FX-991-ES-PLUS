const {
    app,
    BrowserWindow,
    Menu
} = require("electron");

const path = require("path");

let mainWindow;

function createWindow() {

    mainWindow = new BrowserWindow({

        width: 450,
        height: 850,

        minWidth: 450,
        minHeight: 850,

        resizable: true,

        backgroundColor: "#111827",

        autoHideMenuBar: true,

        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false
        }

    });


    // Remove the default Electron menu
    Menu.setApplicationMenu(null);


    // Load calculator
    mainWindow.loadFile("index.html");


    // Prevent window from becoming smaller than calculator
    mainWindow.on("resize", () => {

        const [width, height] =
            mainWindow.getSize();

        const minWidth = 450;
        const minHeight = 850;


        if (
            width < minWidth ||
            height < minHeight
        ) {

            mainWindow.setMinimumSize(
                minWidth,
                minHeight
            );

        }

    });


    mainWindow.on("closed", () => {

        mainWindow = null;

    });

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
