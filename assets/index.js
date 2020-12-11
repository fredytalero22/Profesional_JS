import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.ts'

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