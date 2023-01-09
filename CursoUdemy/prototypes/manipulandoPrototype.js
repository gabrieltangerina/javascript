// const objA = {
//     chaveA: 'A',
// };

// const objB = {
//     chaveB: 'B',
// };

// const objC = new Object;
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);

// O A só tem acesso a ele mesmo
// O B tem acesso a ele e ao A
// O C tem acesso a ele o B e o A, pois ele está ligado ao A que está ligado ao C

// console.log(objC.chaveA);

// Para ver os prototypes do objeto escolhido. Os objetos são ligados aos outros com esse prototype (__proto__).

// console.log(Object.getPrototypeOf(objC));

function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
};

Produto.prototype.desconto = function (descontoDe) {
   this.preco = this.preco - (this.preco * (descontoDe / 100)); 
};

Produto.prototype.aumento = function (aumentoDe) {
    this.preco = this.preco + (this.preco * (aumentoDe / 100));
};

const p1 = new Produto('Camisa', 100);
p1.desconto(50);
console.log(p1);

