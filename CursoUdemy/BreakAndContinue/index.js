const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    if(numero === 2 || numero === 9){
        console.log("Pulou");
        continue;
    }

    if(numero === 7){
        console.log("Achei o número");
        break;
    }
    console.log(numero);
}