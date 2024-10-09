'use strict';

const joke = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn');

const generaJoke = async function () {
  try {
    const config = {
      headers: { Accept: 'application/json' },
    };

    const response = await fetch('https://icanhazdadjoke.com', config);
    if (!response.ok) throw new Error('💥💥💥');
    const data = await response.json();

    joke.textContent = data.joke;
  } catch (err) {
    console.log(`Algo salió mal 😵‍💫💥! ${err.message}`);
  }
};

jokeBtn.addEventListener('click', generaJoke);
