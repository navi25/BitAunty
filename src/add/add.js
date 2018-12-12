const electron = require('electron');
const remote = electron.remote;
const closeBtn = document.getElementById('closeBtn');
const ipc = electron.ipcRenderer

closeBtn.addEventListener('click',  (event) =>{
    let window = remote.getCurrentWindow();
    window.close();
});

const updateBtn = document.getElementById('updateBtn');

updateBtn.addEventListener('click', function () {
    ipc.send('update-notify-value', document.getElementById('notifyVal').value);

    // Close this window
    let window = remote.getCurrentWindow();
    window.close();
});
