/*
É UMA ESTRUTURA DE REPETIÇÃO
SERVE PARA VOCÊ ITERAR SOBRE ARRAYS
ELE EXECUTA UMA FUNÇÃO DE CALLBACK E ESSA FUNÇÃO PODE RECEBER 3 PARÂMETROS, ONDE NENHUM DELES É OBRIGATÓRIO

1º PARÂMETRO --> VAI SER O VALOR ATUAL, CADA ITEM DO ARRAY 
2º    ´´     --> É O ÍNDICE DE CADA ITEM 
3º    ´´     --> É O ARRAY EM SÍ 

A DIFERANÇA ENTRE O .MAP E O FOR EACH

É QUE O .MAP PEGA UMA ARRAY, REALIZA UM PROCESSAMENTO DOS DADOS AFIM DE CRIAR UM NOVO ARRAY COM OS DADOS PROCESSADOS. ENQUANTO O FOR EACH SOMENTE PROCESSA OS DADOS E MANIPULA O PRÓPRIO ARRAY  
  */




let frutas = ['laranja' , 'maça', 'pera', 'uva', 'melão', 'pera']

let novoArray = frutas.map((novoArray, indice, array)=>{
    console.log(novoArray)
})

// let novoArray = frutas.map((valorAtual, indice, array) =>{
//     console.log(valorAtual, indice, array)
//     // return valorAtual
// })

// let numeros = [ 1, 3, 5]

// let novoNumeros = numeros.map((valorAtual, indice, array) => {
//     return valorAtual * 3 
// })

// console.log(numeros)
// console.log(novoNumeros)

// let carros = [
//     {
//         nome : 'Ferrari',
//         valor: 100
//     },
//     {
//         nome : 'Gol',
//         valor : 200
//     }
// ];

// let nomeCarros = carros.map((novoArray, indice, array) =>{
//     console.log(novoArray.nome)
// })

