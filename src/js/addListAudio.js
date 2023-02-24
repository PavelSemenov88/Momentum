import { playList } from "./playList.js";
const playListContainer = document.querySelector('.play-list');


export function getAddListAudio() {
  playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    playListContainer.append(li);
  }) 

  
}