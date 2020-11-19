import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const buttonPlay = document.getElementById("play");
const buttonMute = document.getElementById("mute");

const player = new MediaPlayer({ el: video, plugins: [
     new AutoPlay() 
    ] 
});
buttonPlay.onclick = () => video.paused ? player.play() : player.pause();
buttonMute.onclick = () => video.muted ? player.unmute() : player.mute();