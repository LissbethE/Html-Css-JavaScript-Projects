'use strict';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('.toggle-icon');
const nav = document.querySelector('nav');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const textBox = document.querySelector('.text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

/////////////////////////////////////////
// Dark or Light Images
const imageMode = function (color) {
  img1.src = `img/undraw_web_development_${color}.svg`;
  img2.src = `img/undraw_programmer_${color}.svg`;
  img3.src = `img/undraw_freelancer_${color}.svg`;
};

/////////////////////////////////////////
const toggleDarkLightMode = function (isDark) {
  nav.style.backgroundColor = isDark
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)';

  textBox.style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';

  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';

  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

  isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
};

/////////////////////////////////////////
const switchTheme = function (evento) {
  const isChecked = toggleSwitch.checked;

  isChecked
    ? document.documentElement.setAttribute('data-theme', DARK_THEME)
    : document.documentElement.setAttribute('data-theme', LIGHT_THEME);

  toggleDarkLightMode(isChecked);

  isChecked
    ? localStorage.setItem('theme', DARK_THEME)
    : localStorage.setItem('theme', LIGHT_THEME);
};

/////////////////////////////////////////
toggleSwitch.addEventListener('change', switchTheme);

/////////////////////////////////////////
/// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme && currentTheme === DARK_THEME) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleSwitch.checked = true;
  toggleDarkLightMode(true);
}
