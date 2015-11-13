'use strict';

import app from 'app';
import BrowserWindow from 'browser-window';
import CrashReporter from 'crash-reporter';

let mainWindow = null;

app.on('ready', () => {
    if(mainWindow) {
        return;
    }
    
    mainWindow.loadUrl('file://' + __dirname + '/timeline.html');
    mainWindow.on('closed', () => {
        app.quit();
    });
});
