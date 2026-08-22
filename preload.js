const {
    contextBridge
} = require("electron");


contextBridge.exposeInMainWorld(
    "electronAPI",
    {

        // Reserved for future Electron features

        appReady: () => {
            return true;
        }

    }
);
