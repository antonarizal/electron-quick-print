// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { ipcRenderer } = require('electron')

// GOOD
document.getElementById('send-print').onclick = () => {
  // Send a IPC async message to electron
  // See main.js on line 31
  ipcRenderer.send('print', 'Data Print')
  document.getElementById('print-response').innerText = 'Printing..'
}

ipcRenderer.on('print-reply', (event, response) => {
  document.getElementById('print-response').innerText = response
})
