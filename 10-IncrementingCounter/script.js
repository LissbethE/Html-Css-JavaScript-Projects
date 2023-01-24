'use strict';

const counter = Array.from(document.querySelectorAll('.counter'));

counter.forEach(counter => {
  counter.textContent = 0;

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.textContent;
    const increment = target / 500;

    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
});
