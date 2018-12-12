const {app, BrowserWindow, Menu} = require('electron');
const shell = require('electron').shell;
const path = require('path');
const url = require('url');
require('electron-reload')(__dirname);
let __localDir = "src/";

let win;

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600});

    let fileUrl = __localDir + 'index/index.html';
    // and load the index.html of the app.
    win.loadFile(fileUrl);

    // Open the DevTools.
    // win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    });


    let menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {label:'Adjust Notification Value'},
                {
                    label:'CoinBase',
                    click(){
                        shell.openExternal('https://www.coinbase.com')
                    },
                    accelerator: 'CmdOrCtrl+Shift+C'
                },
                {
                    label:'Robinhood',
                    click(){
                        shell.openExternal('https://www.robinhood.com')
                    },
                    accelerator: 'CmdOrCtrl+Shift+R'
                },
                {type:'separator'},
                {
                    label:'Exit',
                    click(){
                        app.quit();
                    },
                    accelerator: 'CmdOrCtrl+Shift+X'
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});
