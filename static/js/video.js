/// <reference path="./both.js" />


function initPlayer() {
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById("videoElement");
        const parts = document.location.pathname.split("/");
        var flvPlayer = flvjs.createPlayer({
            type: "flv",
            isLive: true,
            url: document.location.protocol + "//" + document.location.host + "/" + parts[1] + "/" + parts[2] +"/live"
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
}

window.addEventListener("load", initPlayer);
