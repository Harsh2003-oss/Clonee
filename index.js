console.log('welcome to spotify')

let songIndex =0;
let audioElement= new Audio("./Perfect.mp3")
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')


let songs=[
  
    {songName: "Perfect" , filePath:"./Perfect.mp3",coverPath:"cover1/.jpg"},
    {songName: "Perfect" , filePath:"./Perfect.mp3",coverPath:"cover2/.jpg"},
    {songName: "Perfect" , filePath:"./Perfect.mp3",coverPath:"cover3/.jpg"},
    {songName: "Perfect" , filePath:"./Perfect.mp3",coverPath:"cover4/.jpg"}
]
// let audioElement = newAudio((Mr-Jat.in).mp3);

//handle play/pause click

masterPlay.addEventListener('click' ,() => {
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play()
}
})

//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeUpdate')
})