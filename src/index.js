
import './index.html';
import './index.scss';


import { getAddListAudio } from "./js/addListaudio.js";
import { choosingUploadImages } from './js/choosingUploadImages';
import { getLanguageChange } from "./js/language.js";
import { showInput } from "./js/nameUser.js";
import { getPlayAudio } from "./js/playAudio.js";
import { getQuotes } from "./js/quotes.js";

import { showTime } from "./js/time.js";
import { getWeather } from "./js/weather.js";



getLanguageChange();
showTime();
showInput();
// sliderGithub();
choosingUploadImages()
getWeather();
getQuotes();
getAddListAudio();
getPlayAudio();

