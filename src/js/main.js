import app from 'app';
import BrowserWindow from 'browser-window';

let mainWindow = null;

app.on('ready', () => {
    if(mainWindow) {
        return;
    }

    mainWindow = new BrowserWindow({ width: 350, height: 640 });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    mainWindow.on('closed', () => {
        app.quit();
    });
});
