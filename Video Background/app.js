const video = document.getElementById("video");
const btn = document.getElementById("btn");
const play = document.getElementById("play")
const pause = document.getElementById("pause")
let flag = true;
btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
btn.addEventListener("click", () => {
    if(flag){
        video.pause()
        flag = false;
        btn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    }else{
        video.play()
        flag = true;
        btn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    }
})