import { languageArr } from "./languageArr.js";

export function showInput() {
  const name = document.querySelector('.name');
  const lang = localStorage.getItem('lang');
  name.placeholder = `${languageArr.greetingName[lang || 'ru']}`;

  function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  
  name.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
      setLocalStorage();
    }
  })
  
  window.addEventListener('beforeunload', setLocalStorage);
  window.addEventListener('load', getLocalStorage);
}
