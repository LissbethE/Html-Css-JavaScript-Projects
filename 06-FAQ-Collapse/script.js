'use strict';

const btn = Array.from(document.querySelectorAll('.btn'));
const faq = Array.from(document.querySelectorAll('.faq'));

btn.forEach(b =>
  b.addEventListener('click', e => {
    const clicked = e.target.closest('.faq');
    clicked.classList.toggle('active');
  })
);
