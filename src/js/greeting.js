import { languageArr } from "./languageArr.js";

const greeting = document.querySelector('.greeting');


export function showTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  const lang = localStorage.getItem('lang');

  if (hours >= 5 && hours < 12) {
    return greeting.textContent = `${languageArr.greetingMorning[lang || 'ru']}`;
  } else if (hours >= 12 && hours < 17) {
    return greeting.textContent = `${languageArr.greetingAfternoon[lang || 'ru']}`;
  } else if (hours >= 17 && hours < 22) {
    return greeting.textContent = `${languageArr.greetingEvening[lang || 'ru']}`;
  } else if ((hours >= 22 && hours < 24) || (hours >= 0 && hours < 5)) {
    return greeting.textContent = `${languageArr.greetingNight[lang || 'ru']}`;
  }
}



