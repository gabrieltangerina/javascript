// Concatenar --> juntar duas ou mais cadeias de texto em uma única cadeia

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const metodoConcat = a1.concat(a2, [7, 8, 9], 'Gabriel');
const usandoSpreads = [...a1, ...a2, ...[7,8,9], 'Gabriel'];

console.log(metodoConcat);
console.log(usandoSpreads);