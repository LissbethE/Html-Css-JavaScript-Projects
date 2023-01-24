'use strict';

const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;
let init = setInterval(Blurring, 30);

function Blurring() {
  load++;

  if (load > 99) clearInterval(init);

  loadingText.textContent = `${load}%`;

  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}rem)`;
}

function scale(num, inMini, inMaxi, outMini, outMaxi) {
  return ((num - inMini) * (outMaxi - outMini)) / (inMaxi - inMini) + outMini;
}
