const produto = {nome: 'Camiseta', tamanho: 'M', preco: 90};

const camiseta = Object.assign({}, produto, {material: 'Algodão', tipo: 'Normal'});
// const camiseta = {...produto, material: 'Algodão'};

console.log(produto);
console.log(camiseta);