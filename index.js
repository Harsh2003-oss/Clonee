console.log('welcome to spotify');

let songIndex = 0;
let audioElement = new Audio("./Perfect.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif'); // Make sure you have this element in your HTML

let songs = [
    {songName: "Perfect", filePath: "./Perfect.mp3", coverPath: "cover1.jpg"},
    {songName: "Love", filePath: "./Love.mp3", coverPath: "loveCover.jpg"},
    {songName: "Senorita", filePath: "./Senorita.mp3", coverPath: "cover3.jpg"},
    {songName: "Perfect", filePath: "./Perfect.mp3", coverPath: "cover4.jpg"}
];

songItems.forEach((element, i) => {
    console.log(i, element);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        if(gif) gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        if(gif) gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});