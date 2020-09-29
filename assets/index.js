const video = document.querySelector("video");
const button = document.querySelector("button");

function MediPlayer(config) {
    this.media = config.el;
}

MediPlayer.prototype.play = function() {
    this.media.play();
};

MediPlayer.prototype.pause = function(){
    this.media.pause();
}

const player = new MediPlayer({ el: video});
button.onclick = () => video.paused ? player.play() : player.pause();