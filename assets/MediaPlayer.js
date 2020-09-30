function MediPlayer(config) {
    this.media = config.el;
}

MediPlayer.prototype.play = function() {
    this.media.play();
};

MediPlayer.prototype.pause = function(){
    this.media.pause();
}

export default MediPlayer