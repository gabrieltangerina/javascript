// Só está disponível dentro de arrays

const numeros = [10, 20, 30];

let valor = 0;
numeros.forEach((el, indice, array) =>{
    valor += el;
})

console.log(valor);