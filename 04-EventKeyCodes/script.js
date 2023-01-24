'use strict';

const insert = document.getElementById('insert');

window.addEventListener('keydown', function (event) {
  insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space😜' : event.key}
        <small>event.key</small>
    </div>
    
    <div class="key">
        ${event.keyCode}
        <small>event.keycode</small>
    </div>
    
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>`;
});

/* 
    Tecla Presion(Key): a
    El Codigo Clave(KeyCode): 65
    Codigo(Code): KeyA
*/
