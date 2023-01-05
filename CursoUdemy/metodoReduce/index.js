const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Somando todos os números do array 
// const total = numeros.reduce((acumulador, valor)=>{
//     acumulador += valor;
//     return acumulador;
// }, 0);

// console.log(total);



// Retornando todos os valores pares do array RECOMENDADO USAR O FILTER e não o reduce
// const pares = numeros.reduce((acumulador, valor)=>{
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// console.log(pares);

// Dobrando todos os valores do array
// const dobro = numeros.reduce((acumulador, valor)=>{
//     acumulador.push(valor * 2);
//     return acumulador;
// }, [] );

// console.log(dobro);

// Multiplica por 2 e soma todos os valores
// const dobraSoma = numeros.reduce((acumulador, valor)=>{
//     acumulador += valor * 2
//     return acumulador;
// }, 0)

// console.log(dobraSoma);


// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62}, // Acumulador
    {nome: 'Maria', idade: 23}, // Valor
    {nome: 'Eduardo', idade: 55}, 
    {nome: 'Letícia', idade: 80}, 
    {nome: 'Rosana', idade: 10}, 
    {nome: 'Wallace', idade: 81} 
];

// Nesse caso, o primeiro objeto vem no parâmetro acumulador e o segundo objeto vem no parâmetro valor, o terceiro objeto vem no parãmetro acumulador, o quarto vai no parâmetro valor e assim por diante. Por isso está comparando os dois parâmetros.

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})

// A lógica fica assim: se a condição for verdadeiro quer dizer que o acumulador é maior que o valor então já retorna o elemento para o próximo teste, este elemento continua sendo o acumulador e o próximo elemento vira o valor. Se acontecer de no teste com o if o valor ser maior ele retorna para o próximo teste e virá o argumento do próximo teste. Lembre que o reduce passa por todos os elementos.]

console.log(maisVelha);

// maisVelha();
