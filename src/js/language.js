import { showInput } from "./nameUser.js";
import { getWeather } from "./weather.js";
import ruFlag from '../img/ru.png';
import enFlag from '../img/en.png';

export const buttonLang = document.querySelector('.language');

export function getLanguageChange() {

  window.addEventListener('load', () => {
    if (localStorage.getItem('lang') === null) {
      localStorage.setItem('lang', 'ru');
      buttonLang.src = './img/ru.png';
    }
    buttonLang.src = `./img/${localStorage.getItem('lang')}.png`
  })

  function switchLanguage() {
    
    if (localStorage.getItem('lang') === 'ru') {
      localStorage.setItem('lang', 'en');
    } else {
      localStorage.setItem('lang', 'ru');
    };

    buttonLang.src = `img/${localStorage.getItem('lang')}.png`;
  }

  buttonLang.addEventListener('click', () => {
    switchLanguage();
    getWeather();
    showInput();
  });
}