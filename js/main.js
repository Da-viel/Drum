'use strict';

//creamos el evento para saber que letra se esta pulsando
const body = document.querySelector('body');
const allSounds = drumSounds();

//creamos los botones
createButtons();

keyUse();

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

function keyUse() {
  const keyboard = [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
  const allSounds = drumSounds();

  console.log(allSounds);
  body.onkeydown = function (evt) {
    evt = evt || window.event;
    let aux = 1;
    for (let i = 0; i < keyboard.length; i++) {
      switch (evt.keyCode) {
        case keyboard[i]:
          allSounds[aux].play();

          break;
      }
      aux += 2;
    }
    //alert('keydown: ' + evt.keyCode);
  };
}
