'use strict';

VanillaTilt.init(document.querySelector('.card2'), {
  max: 25,
  speed: 400,
  scale: 1.1,
  glare: true,
  'max-glare': 1.5,
});

//It also supports NodeList
//VanillaTilt.init(document.querySelectorAll(".your-element"));

//////////////////////////////////////////////////////////////////
const card3 = document.querySelector('.card3');

const settings = {
  max: 25, // 25
  scale: 1.1,
  speed: 500,
  easing: 'cubic-bezier(0.03, 0.98, 0.52, 0.99)',
};

const setTransition = () => {
  clearTimeout(card3.transitionTimeout);

  card3.style.transition = `all ${settings.speed}ms ${settings.easing}`;

  card3.transitionTimeout = setTimeout(() => {
    card3.style.transition = '';
  }, settings.speed);
};

const cardMouseEnter = () => setTransition();

const cardMouseMove = function () {
  const cardWidth = card3.offsetWidth; // 300
  const cardHeight = card3.offsetHeight; // 400

  const centerX = card3.offsetLeft + cardWidth / 2;
  const centerY = card3.offsetTop + cardHeight / 2;

  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;

  //const rotateX = +1 * ((settings.max * mouseY) / (cardHeight / 2)).toFixed(2);
  //const rotateY = -1 * ((settings.max * mouseX) / (cardWidth / 2)).toFixed(2);

  const rotateXUncapped = +1 * ((settings.max * mouseY) / (cardHeight / 2));
  const rotateYUncapped = -1 * ((settings.max * mouseX) / (cardWidth / 2));

  const rotateX =
    rotateXUncapped < -settings.max
      ? -settings.max
      : rotateXUncapped > settings.max
      ? settings.max
      : rotateXUncapped;

  const rotateY =
    rotateYUncapped < -settings.max
      ? -settings.max
      : rotateYUncapped > settings.max
      ? settings.max
      : rotateYUncapped;

  card3.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)
                  scale3d(${settings.scale},${settings.scale},${settings.scale})`;
};

const cardMouseLeave = function () {
  card3.style.transform = `rotateX(${0}deg) rotateY(${0}deg) scale3d(${1},${1},${1})`;
  setTransition();
};

card3.addEventListener('mousemove', cardMouseMove);
card3.addEventListener('mouseleave', cardMouseLeave);
card3.addEventListener('mouseenter', cardMouseEnter);

// scale3d(1.3,1.3,1.3)
