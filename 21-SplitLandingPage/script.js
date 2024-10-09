'use strict';
const containerMain = document.querySelector('.containerMain');
const splitLeft = document.querySelector('.left');
const splitRight = document.querySelector('.right');

const btnL = document.querySelector('.btnLeft');
const btnR = document.querySelector('.btnRight');
const modal = Array.from(document.querySelectorAll('.modal'));
const close = Array.from(document.querySelectorAll('.close'));

const handleHover = function (e) {
  const clicked = e.target.closest('.split');

  if (clicked.classList.contains('left')) {
    containerMain.classList.add('hover-left');
    containerMain.classList.remove('hover-right');
  } else if (clicked.classList.contains('right')) {
    containerMain.classList.add('hover-right');
    containerMain.classList.remove('hover-left');
  }
};

containerMain.addEventListener('mouseover', handleHover);

/* Modal  */

btnL.addEventListener('click', () => modal[0].classList.add('hidden'));
btnR.addEventListener('click', () => modal[1].classList.add('hidden'));

close.forEach(e =>
  e.addEventListener('click', () => {
    modal.forEach(c => c.classList.remove('hidden'));
  })
);
