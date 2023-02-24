import { showDate } from "./date.js";
import { showTimeOfDay } from "./greeting.js";

const time = document.querySelector('.time');

export function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  showTimeOfDay();
  setTimeout(showTime, 1000);
}