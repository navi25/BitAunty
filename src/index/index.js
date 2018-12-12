const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;
const axios = require('axios');
const ipc = electron.ipcRenderer



// Add these two variables
let targetPriceVal;
let targetPrice = document.getElementById('targetPrice');
const notifyBtn = document.getElementById('notifyBtn');

let price = document.querySelector('h1');

function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
        .then(res => {
            const cryptos = res.data.BTC.USD;
            price.innerHTML = '$'+cryptos.toLocaleString('en')
        })
}

getBTC();
setInterval ( getBTC, 30000 );

notifyBtn.addEventListener('click', (event)=>{
    let fileURL = "src/add/add.html";
    let options = {};
    Object.assign(options, {
        frame:false,
        transparent:true,
        alwaysOnTop: true,
        width: 400,
        height: 200
    });
    let win = new BrowserWindow(options);
    win.on('close',  () =>{ win = null });
    win.loadFile(fileURL);
    // win.webContents.openDevTools();
    win.show()
});


ipc.on('targetPriceVal', function (event, arg) {
    targetPriceVal = Number(arg);
    targetPrice.innerHTML = '$'+targetPriceVal.toLocaleString('en')
});
