'use strict';

const imgs = [...document.querySelectorAll('img')];

window.addEventListener('scroll', () => {
  imgs[0].style.top = `-${window.scrollY / 2.5}px`;
  imgs[1].style.top = `-${window.scrollY / 3.5}px`;
  imgs[2].style.top = `-${window.scrollY / 4}px`;
  imgs[3].style.top = `-${window.scrollY / 5}px`;
  imgs[4].style.top = `-${window.scrollY / 6}px`;
  imgs[5].style.top = `-${window.scrollY / 7}px`;
  imgs[6].style.top = `-${window.scrollY / 9}px`;
});

console.log(Math.trunc(Math.random() * 10) + 1);
