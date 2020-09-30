import MediPlayer from './MediaPlayer.js'

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediPlayer({ el: video});
button.onclick = () => video.paused ? player.play() : player.pause();