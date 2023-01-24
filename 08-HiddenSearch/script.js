'use strict';

const search = document.querySelector('.search');

search.addEventListener('click', e => {
  const clicked = e.target.closest('.btn');

  if (!clicked) return;

  if (clicked.classList.contains('btn')) {
    search.classList.toggle('active');
    document.querySelector('.input').focus();
  }
});
