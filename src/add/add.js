const electron = require('electron');
const remote = electron.remote;
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click',  (event) =>{
    let window = remote.getCurrentWindow();
    window.close();
});
