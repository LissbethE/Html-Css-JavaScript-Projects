'use strict';

const smallCups = Array.from(document.querySelectorAll('.cup-small'));
const remained = document.getElementById('remained');
const spanLiters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

const updateBigCup = function () {
  const fullCups = document.querySelectorAll('.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.textContent = ``;
    percentage.style.height = 0;
  } else {
    percentage.textContent = `${(fullCups / totalCups) * 100}%`;
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hiddden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    remained.style.height = 'auto';
    liters.textContent = `${2 - (250 * fullCups) / 1000}L`;
  }
};
updateBigCup();

const cups = function () {
  const highlightCups = function (index) {
    if (
      smallCups[index].classList.contains('full') &&
      !smallCups[index].nextElementSibling.classList.contains('full')
    ) {
      console.log(smallCups[index], !smallCups[index], index);
      index--;
    }

    smallCups.forEach((e, i) => {
      if (i <= index) e.classList.add('full');
      else e.classList.remove('full');
    });

    updateBigCup();
  };

  smallCups.forEach((e, i) =>
    e.addEventListener('click', () => highlightCups(i))
  );
};
cups();
