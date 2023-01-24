'use strict';

const paneles = Array.from(document.querySelectorAll('.panel'));
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', function (e) {
  const clicked = e.target.closest('.panel');

  if (!clicked) return;

  // Remove Class
  paneles.forEach(r => r.classList.remove('active'));

  // Add Class
  clicked.classList.add('active');
});
