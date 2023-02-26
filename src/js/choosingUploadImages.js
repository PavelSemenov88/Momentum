
import { sliderUnsplash, sliderGithub, sliderFlickr } from "./slider.js";

const inputRadio = document.querySelectorAll('input[type=radio]');

const inputRadioGitHub = document.querySelector('input[data-radio=GitHub]');
export const inputRadioUnsplash = document.querySelector('input[data-radio=Unsplash]');
const inputRadioFlickr = document.querySelector('input[data-radio=Flickr]');



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
    } else if (localStorage.getItem('uploadImage') === 'Flickr') {
      sliderFlickr();
      inputRadioFlickr.checked = true;
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
      } else if (api === 'Flickr') {
        sliderFlickr();
        localStorage.setItem('uploadImage', 'Flickr');
      }
    })
  })
}

