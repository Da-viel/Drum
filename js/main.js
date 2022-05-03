'use strict';

const body = document.querySelector('body');

//creamos el evento para saber que letra se esta pulsando
body.onkeydown = function (evt) {
  evt = evt || window.event;
  alert('keydown: ' + evt.keyCode);
};

// Seleccionamos el elemento form
const form = document.forms.drum;

// Creamos los audios
const allSounds = drumSounds();

form.addEventListener('click', (e) => {
  e.preventDefault();
  const { target } = e;

  for (let i = 0; i < allSounds.length; i++) {
    if (i % 2 !== 0) {
      continue;
    } else {
      if (target.matches(`button.${allSounds[i]}`)) {
        allSounds[i + 1].play();
      }
    }
  }
});

function drumSounds() {
  const sounds = [
    '../audio/crash.wav',
    '../audio/hihat-close.wav',
    '../audio/hihat-open.wav',
    '../audio/kick.wav',
    '../audio/ride.wav',
    '../audio/snare.wav',
    '../audio/tom-high.wav',
    '../audio/tom-low.wav',
    '../audio/tom-mid.wav',
  ];

  const allSounds = [];

  for (let i = 0; i < sounds.length; i++) {
    let sound = sounds[i].split('/');

    sound = sound[2].split('.');

    let aux = sound[0].toString();

    const final = new Audio(sounds[i]);

    allSounds.push(aux, final);
  }

  return allSounds;
}
