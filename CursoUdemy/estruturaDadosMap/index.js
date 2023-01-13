const  produtos = new Map();

produtos.set('Camiseta', {Marca: 'HIGH', Preco: 150})
.set('Moletom', {Marca: 'Wanted', Preco: 200})
.set(104, 'Calça')
.set(7, 'Tênis');
// Forma de utilização encadeada.
// Se você der um set em uma chave que já exista, ele irá sobreescrever essa chave.

// console.log(produtos.get('Camiseta'));
// produtos.set('Camiseta', {Marca: 'Poqui', Preco: 90});
// console.log(produtos.get('Camiseta'));
// console.log(produtos.has('Camiseta'));

// console.log(produtos.get('Moletom'))
// console.log(produtos);

// console.log(produtos.get(104)) // Obtem os valores do Map()
// console.log(produtos.size); // Mostra o tamanho do Map()
// for(p of produtos){
    // console.log(p);
// }
// Se você colocar p[0] irá retornar as chaves. Se você colocar p[1] irá retornar os valores

// Você pode criar um Map() já colocando os valores:
const marcas = new Map([
//  chave, valor
    [5, 'Wanted'],
    [10, 'HIGH'],
    [15, 'Trouble'],
    [20, 'ONeil'],
    [25, 'NoHype']
])

for(const [keys, value] of marcas){
    console.log(keys, value);
}

// console.log(marcas);

// Cada posição do Map() é um novo array.


// Exemplo mais real, onde uma API retornou esse array de objetos.
const pessoas = [
    {idade: 17, nome: 'Gabriel'},
    {idade: 25, nome: 'Gustavo'},
    {idade: 31, nome: 'Roberto'}
];

const novasPessoas = new Map();
for( const pessoa of pessoas){
    const { idade } = pessoa;
    novasPessoas.set( idade, { ...pessoa });
}

console.log(novasPessoas);


