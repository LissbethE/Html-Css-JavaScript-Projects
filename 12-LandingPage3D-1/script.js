'use strict';

const toggleIcon = document.querySelector('.toggle__icon');
const navMenu = document.querySelector('.nav-menu');

toggleIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

////////////////////////////////////////////////////////////////
// MouseMove Home Img

document.addEventListener('mousemove', move);
function move(e) {
  this.querySelectorAll('.move').forEach(layer => {
    const speed = layer.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

document.addEventListener('mousemove', move);

////////////////////////////////////////////////////////////////
// GSAP ANIMATION

// NAV
gsap.from('.logo, .toggle__icon', {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 10,
});
gsap.from('.nav-menu__link', {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
  stagger: 0.2,
});

// HOME
gsap.from('.home__title', { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from('.home__description', { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from('.home__btn', { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from('.home__img', { opacity: 0, duration: 1, delay: 1.3, y: 30 });
