'use strict';

//creamos el evento para saber que letra se esta pulsando
const body = document.querySelector('body');

body.onkeydown = function (evt) {
  evt = evt || window.event;
  alert('keydown: ' + evt.keyCode);
};

//creamos los botones
createButtons();

// Funcion para crear los objetos Audio()
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

function createButtons() {
  const form = document.forms.drum;
  const allSounds = drumSounds();

  const frag = document.createDocumentFragment();

  for (let i = 0; i < allSounds.length; i++) {
    if (i % 2 !== 0) {
      continue;
    } else {
      const div = document.createElement('div');
      div.innerHTML = `<div class='div${allSounds[i]}'>
        <button class="${allSounds[i]}">${allSounds[i]}</button>
        </div>`;
      frag.append(div);
    }
  }

  form.append(frag);

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
}
