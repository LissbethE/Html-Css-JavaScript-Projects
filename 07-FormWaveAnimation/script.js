'use strict';

const labels = document.querySelectorAll('.form-control label');

labels.forEach(e => {
  e.innerHTML = e.innerText
    .split('')
    .map(
      (letter, i) =>
        `<span  style="transition-delay:${i * 50}ms">${letter}</span>`
    )
    .join('');
});
