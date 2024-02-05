// File:Public/main.js

const { app, BrowserWindow } = require('electron')


const createWindow = () => {
    // To create a browser window.
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            enableRemoteModule: true
        }
    })

    
    mainWindow.loadURL('http://localhost:3000')// to load the index.html in local host.

    
}
//call back function to call 'createWindow'
app.whenReady().then(() => {     
    createWindow()

    app.on('activate', () => {
        
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
