'use strict';

const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const circles = Array.from(document.querySelectorAll('.circle'));
const progress = document.querySelector('.progress');

let currentActive = 1;

// ->
btnNext.addEventListener('click', function (e) {
  currentActive++;

  if (currentActive > circles.length) currentActive = circles.length;

  update();
});

// <-
btnPrev.addEventListener('click', function (e) {
  currentActive--;

  if (currentActive < 1) currentActive = 1;

  update();
});

function update() {
  circles.forEach((circle, index) => {
    // 0 < 2
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = Array.from(document.querySelectorAll('.active'));

  progress.style.width =
    ((actives.length - 2) / (circles.length - 1)) * 99 + '%';

  if (currentActive === 1) {
    btnPrev.disabled = true;
  } else if (currentActive === circles.length) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}
