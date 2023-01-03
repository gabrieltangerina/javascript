const nomes = ['Luiz', 'Rodrigo', 'Gabriel'];
const nomes = new Array = ['Luiz', 'Rodrigo', 'Gabriel'];

nomes[2] = 'Tangerina'
delete nomes[0];

console.log(nomes);

const numeros = [0, 3, 24, 7];
const ns = [...numeros];

const removido = ns.pop(); 
console.log(`${numeros} - array numeros`);
console.log(`${ns} - array ns`);
console.log(removido);  

const numeros = [0, 3, 24, 7];
const ns = [...numeros];

const removido = ns.shift();

console.log(numeros);
console.log(ns);
console.log(removido);





const nomes = ['Gabriel', 'Gustavo', 'Guilherme'];

nomes.push('Gui');
console.log(nomes);





const nomes = ['Gabriel', 'Gustavo', 'Guilherme'];

nomes.unshift('Gandhi');
console.log(nomes);




const nome = 'Gabriel Tangerina Gonzalez';

const nomes = nome.split(' ');
console.log(nomes);




const nomes = ['Gabriel', 'Tangerina', 'Gonzalez'];
const nome = nomes.join(' ');

console.log(nome);