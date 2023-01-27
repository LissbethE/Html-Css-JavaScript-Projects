'use strict';

const containerBtn = document.querySelector('.containerBtn');
const audios = Array.from(document.querySelectorAll('.miAudio'));

const sounds = ['Gaviotas', 'Lluvia', 'Victoria'];

// FIXME: Mi Version -------------------------------------------------------------

sounds.forEach((s, i) => {
  containerBtn.insertAdjacentHTML(
    'beforeend',
    `<button class="btn conexion-${i}">${s}</button>`
  );
});

containerBtn.addEventListener('click', e => {
  const clicked = e.target;

  for (let i = 0; i < sounds.length; i++) {
    if (
      clicked.classList.contains(`conexion-${i}`) ===
      audios[i].classList.contains(`conexion-${i}`)
    ) {
      audios[i].play();
    } else {
      audios[i].pause();
    }
  }
});

// FIXME: Su Version -------------------------------------------------------------

sounds.forEach(s => {
  const btn = document.createElement('button');
  btn.classList.add('host-btn');

  btn.innerText = s;

  btn.addEventListener('click', () => {
    stopSongs();

    document.getElementById(s).play();
  });

  document.querySelector('.container-hostBtn').appendChild(btn);
});

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
