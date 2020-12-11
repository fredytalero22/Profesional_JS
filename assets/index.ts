import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video = document.querySelector("video");
const buttonPlay = document.getElementById("play");
const buttonMute = document.getElementById("mute");

const player = new MediaPlayer({ 
    el: video,
    plugins: [new AutoPlay(), new AutoPause()] 
});
buttonPlay.onclick = () => video.paused ? player.play() : player.pause();
buttonMute.onclick = () => video.muted ? player.unmute() : player.mute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}