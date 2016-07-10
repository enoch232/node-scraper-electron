const {app} = require("electron");
const {browserWindow} = require("electron");
let win = null;
app.on("ready", function(){
	win = new browserWindow({
		width: 800,
		height: 500
	});
});