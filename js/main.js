'use strict';

alert('¡Para tocar la bateria haz click o usa los botones del 0-8!');

//creamos el evento para saber que letra se esta pulsando
const body = document.querySelector('body');

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

// Funcion para la creacion auto de los botones
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

let currentChord = null; // Referencia a lo que se esta reproduciendo
let keyIsPressed = false; // Referencia para cuando una tecla es presionada

// Llamada a la funcion makeSound cuando se aprieta un boton
document.addEventListener('keydown', function (event) {
  if (keyIsPressed === false) {
    makeSound(event.key);
    keyIsPressed = true;
  }
  keyIsPressed = false;
});

// Hace la llamada al sonido y crea la referencia al sonido
function makeSound(key) {
  const allSounds = drumSounds();
  let recorreLosSonidos = 1;

  for (let i = 0; i < allSounds.length / 2; i++) {
    switch (key) {
      case [i].toString():
        allSounds[recorreLosSonidos].play();
        break;
    }
    recorreLosSonidos += 2;
  }
}
