const datePosition = document.querySelector('.date');


export function showDate() {
  const lang = localStorage.getItem('lang');
  const date = new Date();
  const options = {weekday: "long", month: 'long', day: 'numeric' };
  const currentDate = new Intl.DateTimeFormat(lang || 'ru', options).format(date);
  datePosition.textContent = currentDate.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}