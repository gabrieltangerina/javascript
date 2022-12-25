// function teste(){
//     console.log(arguments);
// }

// teste('Qualquer', 'Coisa');

// const testando = ()=>{
//     console.log(arguments);
// }

// testando('Qualquer', 'Coisa');


// let somando = 0;
// const somaPrimeira = () =>{
//     for(let argumentos of arguments){
//         somando += arguments;
//     }
//     console.log(somando);
// }
// somaPrimeira(5, 5);

// function soma (){
//     for (let argumento of arguments){
//         somando += argumento;
//     }
//     console.log(somando);
// }

// soma(1, 2, 2);

// function argumentosNaoRecebidos  () {
//     console.log(arguments);
// }

// argumentosNaoRecebidos('Contagem', 1, 2, 3, 'Re-contagem', 3, 2, 1);

// let total = 0;
// function soma (a, b, c,){
//     for(let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }

// soma(3, 5, 4 , 2);

// function soma (a, b = 5, c = 10){
//     console.log(a + b + c);
// }
// soma(10, undefined, 20);

// let acumulador = 0;
// function conta (operador, acumulador, ...numeros){
//     for(let numero of numeros){
//        if(operador === '+') acumulador += numero;
//        if(operador === '-') acumulador -= numero;
//        if(operador === '/') acumulador /= numero;
//        if(operador === '*') acumulador *= numero;
//     }
//     console.log(acumulador);
// }

// conta('+', 1, 20, 30, 40, 50);

const conta = function(...args){
    console.log(args);
};

conta('+', 1, 20, 30, 40, 50);