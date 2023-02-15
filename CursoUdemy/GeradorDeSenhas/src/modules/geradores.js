const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));

const geraMinuscula = () => String.fromCharCode(rand(97, 123));

const geraNumero = () => String.fromCharCode(rand(48, 58));

const simbolos = ',.~<>[]{}*!@#$%-_&()+=';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

function geraSenha(qtd, maiuscula, minuscula, nume){

}