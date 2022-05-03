'use strict';

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

/* if (target.matches(`button.${allSounds[0]}`)) {
    allSounds[1].play();
    console.log(allSounds[0]);
} else if (target.matches('button.hihat-close')) {
    hihatClose.play();
    console.log('hihat-close');
} */
