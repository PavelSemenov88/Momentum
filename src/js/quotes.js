import { buttonLang } from "./language.js";
import data from '../data.json';

const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const authorText = document.querySelector('.author');

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getQuotesPush(quote, authorText, array, randomNumber, lang) {

  quote.textContent = array[randomNumber][lang || 'ru'].text;
  authorText.textContent = array[randomNumber][lang || 'ru'].author;
}

export function getQuotes() {

  let randomNumber = getRandomArbitrary(0, data.length);
  let lang = localStorage.getItem('lang');

  changeQuote.addEventListener('click', () => {
    randomNumber = getRandomArbitrary(0, data.length);
    getQuotesPush(quote, authorText, data, randomNumber, lang)
  })
    getQuotesPush(quote, authorText, data, randomNumber, lang)
  window.addEventListener('load', getQuotesPush(quote, authorText, data, randomNumber, lang));


  buttonLang.addEventListener('click', () => {
    lang = localStorage.getItem('lang');
    getQuotesPush(quote, authorText, data, randomNumber, lang);
  });
}



