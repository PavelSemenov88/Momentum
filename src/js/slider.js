import { showTimeOfDay } from "./greeting.js";
import { languageArr } from "./languageArr.js";



const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const body = document.querySelector('body');
const randomNum = getRandomNum(1, 20);

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function setBg(timeOfDay, bgNum) {


  let day = '';
  const lang = localStorage.getItem('lang');

  if (timeOfDay === `${languageArr.greetingMorning[lang || 'ru']}`) {
    day = 'morning';
  } else if (timeOfDay === `${languageArr.greetingAfternoon[lang || 'ru']}`) {
    day = 'afternoon';
  } else if (timeOfDay === `${languageArr.greetingEvening[lang || 'ru']}`) {
    day = 'evening';
  } else if (timeOfDay === `${languageArr.greetingNight[lang || 'ru']}`) {
    day = 'night';
  }


  const img = new Image();
  img.src = `https://raw.githubusercontent.com/PavelSemenov88/stage1-tasks/assets/images/${day}/${bgNum}.jpg`;

  return img.addEventListener('load', () => {
    body.style.backgroundImage = `url(${img.src})`
  });

}
function getSlideNext(random) {
  if (random === 20) {
    random = 1;
  } else {
    random += 1;
  }
  return random;
}

function getSlidePrev(random) {
  if (random === 1) {
    random = 20;
  } else {
    random -= 1;
  }
  return random;
}

export function slider() {

  let random = randomNum;
  let bgNum = random.toString().padStart(2, '0');
  let timeOfDay = showTimeOfDay();
  setBg(timeOfDay, bgNum);

  slideNext.addEventListener('click', () => {
    random = getSlideNext(random);
    bgNum = random.toString().padStart(2, '0');
    timeOfDay = showTimeOfDay()
    setBg(timeOfDay, bgNum);
  });

  slidePrev.addEventListener('click', () => {
    random = getSlidePrev(random);
    bgNum = random.toString().padStart(2, '0');
    timeOfDay = showTimeOfDay()
    setBg(timeOfDay, bgNum);
  })


}

// async function getLinkToImage() {
//   const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=HeAY_8cULGFtdRMUmT-hlVoIG85JxTkSKHKBxCYEJoM';
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data.urls.regular)
//  }
// console.log(getLinkToImage());