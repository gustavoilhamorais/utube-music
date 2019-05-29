$(document).ready(function() {
    const { remote } = require("electron");

    $("#close").click(function () {
        remote.BrowserWindow.getFocusedWindow().close();
    });

    $("#minimize").click(function () {
        remote.BrowserWindow.getFocusedWindow().minimize();
    });
});
