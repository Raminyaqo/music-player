const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Object
const songs = [
  {
    name: "m-1",
    artist: "Duman",
    displayName: "Mahni-1"
  }
  {
    name: "m-2",
    artist: "Yuzyuzeyken konusurz",
    displayName: "Mahni-2"
  }
  {
    name: "m-3",
    artist: "Model",
    displayName: "Mahni-3"
  }

  {
    name: "m-4",
    artist: "Modell",
    displayName: "Mahni-4"
  }
]


let isPlaying = false;

function playSong(){
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause")
  music.play()
}
function pauseSong(){
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play")
  music.pause()
}

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong() ));


let songIndex = 0;

function loadSong(song){
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `./assets/audio/${song.name}.mp3`;
}



function prevSong() {
  songIndex--
  if (songIndex < 0) {
    songIndex = songs.length-1
  }

  loadSong(songs[songIndex])
  playSong()
}

function nextSong() {
  songIndex++
  if (songIndex > songs.length - 1) {
    songIndex = 0
  }

  loadSong(songs[songIndex]);
  playSong();
}




loadSong(songs[songIndex])
prevBtn.addEventListener('click', prevSong)
prevBtn.addEventListener('click', nextSong)
