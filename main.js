const {app} = require("electron");
const {BrowserWindow} = require("electron");
let win = null;
app.on("ready", function(){
	win = new BrowserWindow({
		width: 800,
		height: 500
	});
	win.loadURL("file://"+__dirname + "/app/index.html");
	win.openDevTools();
});