import { playList } from "./playList.js";
import Aqua from '../audio/Aqua Caelestis.mp3';
import Ennio from '../audio/Ennio Morricone.mp3';
import River from '../audio/River Flows In You.mp3';
import Summer from '../audio/Summer Wind.mp3';

const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');

const progress = document.querySelector('.progress');
const currentTime = document.querySelector('.currentTime');
const durationTime = document.querySelector('.durationTime');

const timeLine = document.querySelector('.timeline');

export function getPlayAudio() {
  const playItem = document.querySelectorAll('.play-item');
  let numberSong = 0;
  const audio = new Audio();
  audio.src = playList[numberSong].src;

  function formatTime(seconds) {

    let sec = parseInt(seconds);
    let min = parseInt(seconds / 60);
    sec -= min * 60
    let hours = parseInt(min / 60);
    min -= hours * 60;

    if (hours === 0) return `${min}:${String(sec % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${min}:${String(
      sec % 60
    ).padStart(2, 0)}`
  };

  function loadTimeSong() {
    durationTime.textContent = formatTime(audio.duration);
    audio.volume = 0.75;
  }

  audio.addEventListener('loadeddata', loadTimeSong);


  const progressLine = (e) => {
    const timelineWidth = window.getComputedStyle(timeLine).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek
  };

  timeLine.addEventListener('click', progressLine);


  function progressBar() {
    progress.style.width = audio.currentTime / audio.duration * 100 + '%';
    currentTime.textContent = formatTime(audio.currentTime)
  }

  setInterval(progressBar, 500);


  function playAudio() {
    playItem[numberSong].classList.add('item-active');
    if (audio.paused) {
      playBtn.classList.add('pause');
      audio.play();
    } else {
      playBtn.classList.remove('pause');
      audio.pause();
    }
  }

  playBtn.addEventListener('click', playAudio);


  function playPrevPlay() {
    playItem[numberSong].classList.remove('item-active')

    if (numberSong === 0) {
      numberSong = (playList.length - 1);
    } else {
      numberSong -= 1;
    }
    playItem[numberSong].classList.add('item-active');
    audio.src = playList[numberSong].src;
    audio.play();
    playBtn.classList.add('pause');
  }

  playPrevBtn.addEventListener('click', playPrevPlay);


  function playNextPlay() {
    playItem[numberSong].classList.remove('item-active')
    if (numberSong === (playList.length - 1)) {
      numberSong = 0;
    } else {
      numberSong += 1;
    }
    playItem[numberSong].classList.add('item-active');
    audio.src = playList[numberSong].src;
    audio.play();
    playBtn.classList.add('pause');
  }

  playNextBtn.addEventListener('click', playNextPlay);


  const volumeButton = document.querySelector('.volume-button');
  const volumeEl = document.querySelector('.volume');

function offVolume() {
  audio.muted = !audio.muted;
  if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
  } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
  }
}

volumeButton.addEventListener("click", offVolume);


const volumeSlider = document.querySelector(".volume-slider");
const volumePercentage =  document.querySelector(".volume-percentage");

const volumeSound  = (e) => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  volumePercentage.style.width = newVolume * 100 + '%';
}

volumeSlider.addEventListener('click', volumeSound)



}