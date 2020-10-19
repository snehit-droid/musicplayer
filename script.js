var audiofiles = ['music/02 Jhalli Patakha - Saala Khadoos (Sunidhi Chauhan) 190Kbps.mp3',
    'music/03 Dil Ye Ladaku - Saala Khadoos (Monali Thakur) 190Kbps.mp3',
    'music/04 - Tera Hone Laga Hoon.mp3',
    'music/05 - If You Hold My Hand - DownloadMing.SE.mp3',
    'music/06 Ambarsariya (Fukrey).mp3',
    'music/08 - Kabira - DownloadMing.SE.mp3',
    'music/Allah_Maaf_Kare-Sonu_Nigam-www.Mp3Mad.Com.mp3',
    'music/Chiggy Wiggy(MyMp3Song).mp3',
    'music/Choomantar(MyMp3Song).mp3',
    'music/Dhunki(MyMp3Song).mp3'
];
var playpause = 1;
var track = 0;
var MPlayer = /** @class */ (function () {
    function MPlayer() {
        this.player = document.createElement("audio");
        this.player.id = 'myAudio';
        this.player.setAttribute('type', 'audio');
        document.getElementById("playerbox").appendChild(this.player);
    }
    MPlayer.prototype.setSource = function (url) {
        this.player.src = url;
    };
    MPlayer.prototype.play = function () {
        console.log("play");
        this.player.play();
    };
    MPlayer.prototype.stop = function () {
        console.log("pause");
        this.player.pause();
    };
    return MPlayer;
}());
var myplayer = new MPlayer();
var play = document.getElementById("play");
play.onclick = function () {
    if (playpause == 1) {
        myplayer.play();
        playpause = 0;
    }
    else if (playpause == 0) {
        myplayer.stop();
        playpause = 1;
    }
};
var next = document.getElementById("next");
var prev = document.getElementById("prev");
if (track == 0) {
    myplayer.setSource(audiofiles[0]);
}
next.onclick = function () {
    console.log("next");
    track++;
    if (track != 0) {
        myplayer.setSource(audiofiles[track]);
        myplayer.play();
    }
    if (track == audiofiles.length) {
        track = 0;
        myplayer.setSource(audiofiles[track]);
        myplayer.play();
    }
};
prev.onclick = function () {
    console.log("prev");
    track--;
    if (track != 0) {
        myplayer.setSource(audiofiles[track]);
        myplayer.play();
    }
    if (track == 0 || track < 0) {
        track = audiofiles.length - 1;
        myplayer.setSource(audiofiles[track]);
        myplayer.play();
    }
};
var volumeChange = document.getElementById('myAudio');
var volumeSlide = document.getElementById('myRange');
var volumeValue = document.getElementById('vol');
volumeValue.innerHTML = volumeSlide.value;
volumeChange.volume = 0.5;
volumeSlide.oninput = function () {
    volumeValue.innerHTML = volumeSlide.value;
    if (+volumeSlide.value == 1) {
        volumeChange.volume = 0;
    }
    if (+volumeSlide.value == 100) {
        volumeChange.volume = 1.0;
    }
    else if (+volumeSlide.value > 80) {
        volumeChange.volume = 0.8;
    }
    else if (+volumeSlide.value < 20) {
        volumeChange.volume = 0.2;
    }
};
// class Player{
//     audiolist:Array<string> = [];
//     constructor(songarr){
//         for(let i=0;i<songarr.length;i++){
//             this.audiolist.push(songarr[i]);
//         }
//     }
//     playtrack(track){
//         track.play();
//     }
//     stop(track){
//         track.pause();
//     }
// }
// let i = 0;
// let j = 1;
// let myplayer = new Player(audiofiles);
// var play = document.getElementById("play");
// play.onclick = () => {
//     var song = document.createElement('audio');
//     song.id = "mytrack";
//     if(j == 1){
//     song.src = myplayer.audiolist[i];    
//     myplayer.playtrack(song);
//     j=0;
//     }
//     else{
//     song.src = myplayer.audiolist[i];
//     myplayer.stop(song);
//     j = 1;    
//     }
// }
// var next = document.getElementById("next");
// next.onclick = () => {
//     if(i == (audiofiles.length - 1)){
//         i = 0;
//     }
//     else{
//         i+=1;
//     }
// }
// var prev = document.getElementById("prev");
// prev.onclick = () => {
//     if(i == 0){
//         i = (audiofiles.length - 1);
//     }
//     else{
//         i-=1;
//     }
// }
