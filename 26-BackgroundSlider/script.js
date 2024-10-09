'use strict';

const myBody = document.body;
const slides = [...document.querySelectorAll('.slider')];
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

console.log(slides);

let activeSlide = 0;

const setBgBody = function (current) {
  myBody.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${slides[current].style.backgroundImage}`;
};
setBgBody(activeSlide);

const setActiveSlide = function (current) {
  slides.forEach(e => e.classList.remove('active'));
  slides[current].classList.add('active');
};

rightBtn.addEventListener('click', e => {
  activeSlide++;

  if (activeSlide > slides.length - 1) activeSlide = 0;

  setBgBody(activeSlide);
  setActiveSlide(activeSlide);
});

leftBtn.addEventListener('click', e => {
  activeSlide--;
  console.log(activeSlide, slides.length);

  if (activeSlide < 0) activeSlide = slides.length - 1;

  setBgBody(activeSlide);
  setActiveSlide(activeSlide);
});
