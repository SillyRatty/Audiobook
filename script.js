const botao_play_pause  = document.getElementById('play-pause');
const nome_capitulo = document.getElementById('capitulo')
const audio_capitulo = document.getElementById('audio-capitulo');
const botao_anterior_capitulo = document.getElementById('anterior');
const botao_proximo_capitulo = document.getElementById('proximo');

const numero_capitulos = 10;
let capitulo_atual = 1;
let playing_audio = false;

function playAudio(){
    audio_capitulo.play();
    playing_audio = true;
    botao_play_pause.classList.remove('bi-play-circle-fill')
    botao_play_pause.classList.add('bi-pause-circle-fill')
}
function pauseAudio(){
    audio_capitulo.pause();
    playing_audio = false;
    botao_play_pause.classList.remove('bi-pause-circle-fill')
    botao_play_pause.classList.add('bi-play-circle-fill')
}
function toggleAudio(){
    playing_audio ? pauseAudio():playAudio() ;
}

function updateChapter(){
    audio_capitulo.src = './books/dom-casmurro/' + capitulo_atual + '.mp3';
    nome_capitulo.innerText = 'Capítulo ' + capitulo_atual
    playAudio();
}
function previousChapter(){
    capitulo_atual = capitulo_atual <= 1 ? 10:capitulo_atual - 1;
    updateChapter();
}
function nextChapter(){
    capitulo_atual = capitulo_atual >= 10 ? 1:capitulo_atual + 1;
    updateChapter();
}

botao_play_pause.addEventListener('click', toggleAudio);
botao_anterior_capitulo.addEventListener('click', previousChapter)
botao_proximo_capitulo.addEventListener('click', nextChapter);
