
import { languageArr } from "./languageArr.js";

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');
const city = document.querySelector('.city');

export async function getWeather() {
  const lang = localStorage.getItem('lang');
  
  function firstLoading() {
    if (localStorage.getItem('city') === null) {
      localStorage.setItem('city', 'Минск');
      city.value = 'Минск'
      return 'Минск';
    } else {
      return localStorage.getItem('city');
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${firstLoading()}&lang=ru&appid=02bce90e02575f3350f4e83e031240ae&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod != '200') {
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
      weatherError.textContent = `${languageArr.weather.error1[lang || 'ru']}`;
    } else {
      weatherError.textContent = `${languageArr.weather.error2[lang || 'ru']} '${city.value}'!`;
    }

    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';

  } else {

    const precipitation = data.weather[0][languageArr.weather.precipitation[lang || 'ru']];

    // const newPrecipitation = precipitation[0].toUpperCase() + precipitation.slice(1);

    city.value = localStorage.getItem('city')
    weatherError.textContent = '';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = precipitation;
    wind.textContent = `${languageArr.weather.windSpeed[lang || 'ru']} ${Math.round(data.wind.speed)} ${languageArr.weather.speed[lang || 'ru']}`;
    humidity.textContent = `${languageArr.weather.humidity[lang || 'ru']} ${Math.round(data.main.humidity)} %`;

  }
}

city.addEventListener('change', () => {
  localStorage.setItem('city', city.value);
  getWeather();
})




