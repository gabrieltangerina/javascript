// function random (min, max){
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }

// const min = 1;
// const max = 2;
// let rand = random(min, max);

// while(rand !== 2){
//     rand = random(min, max);
//     console.log(rand);
// }

let salario = 1000;
let aumento = 100

// while (salario < 1500){
//     salario += 100;
//     console.log(`Meu salário é ${salario}`);
// }

do {
    console.log(`O valor do aumento é de ${aumento}`);
    aumento += 50
}while(aumento < 100);

while(aumento < 100){
    console.log(`O valor do aumento é de ${aumento}`);
    aumento += 50
}