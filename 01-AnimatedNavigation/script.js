'use strict';

const btn = document.querySelector('.btn');
const navigation = document.querySelector('.navigation');

btn.addEventListener('click', () => navigation.classList.toggle('active'));
