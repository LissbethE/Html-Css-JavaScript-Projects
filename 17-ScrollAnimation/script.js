'use strict';

const box = Array.from(document.querySelectorAll('.box'));

const options = {
  threshold: 0.5,
  rootmargin: '0px',
};

const observador = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      setTimeout(function () {
        entry.target.classList.remove('show');
      }, 600);
    }
  });
}, options);

box.forEach(e => observador.observe(e));
