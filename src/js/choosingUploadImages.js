
import { sliderUnsplash, sliderGithub } from "./slider.js";

const inputRadio = document.querySelectorAll('input[type=radio]');

const inputRadioGitHub = document.querySelector('input[data-radio=GitHub]');
export const inputRadioUnsplash = document.querySelector('input[data-radio=Unsplash]');



export function choosingUploadImages() {

  window.addEventListener('load', () => {
    if (localStorage.getItem('uploadImage') === null) {
      localStorage.setItem('uploadImage', 'GitHub');
      sliderGithub();
      inputRadioGitHub.checked = true;
    } else if (localStorage.getItem('uploadImage') === 'GitHub') {
      sliderGithub();
      inputRadioGitHub.checked = true;
    } else if (localStorage.getItem('uploadImage') === 'Unsplash') {
      sliderUnsplash()
      inputRadioUnsplash.checked = true;
    }
  })




  inputRadio.forEach(input => {
    input.addEventListener('click', () => {
      const api = input.dataset.radio;
      if (api === 'GitHub') {
        sliderGithub();
        localStorage.setItem('uploadImage', 'GitHub');
      } else if (api === 'Unsplash') {
        sliderUnsplash();
        localStorage.setItem('uploadImage', 'Unsplash');
      }
    })
  })
}

