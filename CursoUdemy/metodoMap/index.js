// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const dobra = numeros.map(el => el * 2)
// console.log(dobra);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

// Pegando os nomes dos elementos do onjeto
const nomes = pessoas.map((el) => el.nome);
console.log(nomes);

// Pegando as idades dos elementos do onjeto
const idades = pessoas.map (el => `idade: ${el.idade}`)
console.log(idades);

// Adicionando uma chave id em cada elemento
const criandoId = pessoas.map((el, indice)=>{
    el.id = indice + 1;
    return el;
})

console.log(criandoId);