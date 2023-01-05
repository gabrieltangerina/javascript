const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Filtar os números páres
// Dobrando os números páres
// Somando os números pares dobrados
const tratandoNumeros = numeros.filter( el=> el % 2 === 0 ).map( el => el * 2).reduce((acumulador, valor) =>  acumulador + valor, 0)
console.log(tratandoNumeros);

// const dobrandoNumeros = numeros.map((el)=>{
//     return el * 2;
// })
// console.log(dobrandoNumeros);

// const somandoNumeros = numeros.reduce((acumulador, el)=>{
//     acumulador += el;
//     return acumulador;
// })

// console.log(somandoNumeros);