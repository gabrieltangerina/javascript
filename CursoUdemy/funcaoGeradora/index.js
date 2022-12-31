// function* geradora1(){
//     // Código...
//     yield 'Valor 1';
//     // Código...
//     yield 'Valor 2';
//     // Código
//     yield 'Valor 3';
// }

// const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().done);
// console.log(g1.next());
// console.log(g1.next());

// for(let valor of g1){
    // console.log(valor);
// }

// function* geradora2(){
//     let i = 0;
//     while(true){
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2();

// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3 () {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}