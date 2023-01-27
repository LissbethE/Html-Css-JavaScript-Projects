"use strict";

import { VoiceRSS, audioElement } from "./voice.js";

const btn = document.querySelector(".btn");

// Passing Joke To voiceRss Api
const tellMe = function (joke) {
  VoiceRSS.speech({
    key: "63cd6782301b4cf3a66490a07eb87e21",
    src: joke,
    hl: "es-mx",
    v: "Juana",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
};

// Disable/Enable Button, Primera vez: Positivo = Negativo
const toggleButton = () => (btn.disabled = !btn.disabled);

// Joke Apis
const getJokes = function () {
  let joke;

  fetch(
    ` https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky,Christmas?lang=es&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(`🤪Something went wrong, Code: ${response.status}`);

      return response.json();
    })
    .then((data) => {
      if (data.setup) joke = `${data.setup}... ${data.delivery}`;
      else joke = data.joke;

      // Text-to-speech
      tellMe(joke);

      // Disable Button, Segunda vez: Positivo = Negativo
      toggleButton();
    })
    .catch((err) => console.log(`💥💥Whoops💥, ${err.message}💥💥`));
};

/*
btn.addEventListener("click", getJokes);

Mi version
audioElement.addEventListener("ended", () => (btn.disabled = false));
audioElement.addEventListener("play", () => (btn.disabled = true));
*/

// Su version
btn.addEventListener("click", getJokes);
// Enable Button, Tercera vez: Negativo = Positivo
audioElement.addEventListener("ended", toggleButton);
