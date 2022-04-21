const { app, BrowserView, BrowserWindow } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1024,
        height: 1650,
        x: 70,
        y: 50,
        title: 'P5 Preview Ref',
        backgroundColor: '#000',
        nodeIntegration: false,
        webSecurity: false,
        devTools: false,
    })

    const viewOne = new BrowserView({
        webPreferences: {}
    })

    win.addBrowserView(viewOne)
    viewOne.setBounds({ x: 0, y: 0, width: 1024, height: 800 })
    viewOne.webContents.loadURL('http://localhost:8080/')
    // viewOne.webContents.openDevTools()

    const viewTwo = new BrowserView({
        webPreferences: {}
    })

    win.addBrowserView(viewTwo)
    viewTwo.setBounds({ x: 0, y: 810, width: 1024, height: 800 })
    viewTwo.webContents.loadURL('file:///p5-reference/index.html')
    // viewTwo.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
