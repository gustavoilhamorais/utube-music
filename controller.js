$(document).ready(function() {
    const app = require("electron").remote.app;
    const { remote } = require("electron");

    $("#close").click(function () {
        remote.BrowserWindow.getFocusedWindow().close();
    });

    $("#minimize").click(function () {
        remote.BrowserWindow.getFocusedWindow().minimize();
    });

    $("#maximize").click(function () {
        remote.BrowserWindow.getFocusedWindow().maximize();
    });

    $("#reload").click(() => {
        remote.BrowserWindow.getFocusedWindow().reload();
    });
});
