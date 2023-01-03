// Pegando os valores maiores que 10

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosMaior10 = numeros.filter( (el, indice, array) => {
//     console.log(el, indice, array);
//     return el > 10;
// })




const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomeGrande = pessoas.filter( el=> el.nome.length >= 5 );
console.log(nomeGrande);

const idadeMaior50 = pessoas.filter( el => el.idade > 50);
console.log(idadeMaior50);

const nomeTerminaComA = pessoas.filter( el => el.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);
