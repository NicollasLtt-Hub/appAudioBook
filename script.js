const botaoPlayPause = document.getElementById('play-pause');
const botaoProximo = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');
const tituloCapitulo = document.getElementById('capitulo');
const audio = document.getElementById('audio-capitulo');

let taTocando = false;
let capituloAtual = 1;
let qtdCapitulo = 10;

function tocarFaixa() {
  audio.play();
  taTocando = true;
  botaoPlayPause.classList.add('tocando');
}
function pausarFaixa() {
  audio.pause();
  taTocando = false;
  botaoPlayPause.classList.remove('tocando');
}

botaoPlayPause.addEventListener('click', () => {
  if (taTocando) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
});

function proximoCapitulo() {
  pausarFaixa();
  if (capituloAtual < qtdCapitulo) {
    capituloAtual++;
  } else {
    capituloAtual = 1;
  }

  audio.src = `./audios/${capituloAtual}.mp3`;
  tituloCapitulo.innerText = `Capítulo ${capituloAtual}`;
}

function capituloAnterior() {
  pausarFaixa();
  if (capituloAtual === 1) {
    capituloAtual = qtdCapitulo;
  } else {
    capituloAtual--;
  }

  audio.src = `./audios/${capituloAtual}.mp3`;

  tituloCapitulo.innerText = `Capítulo ${capituloAtual}`;
}

botaoProximo.addEventListener('click', proximoCapitulo);
botaoAnterior.addEventListener('click', capituloAnterior);
