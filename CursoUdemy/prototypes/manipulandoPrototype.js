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

Produto.prototype.esgotado = function (){
    this.nome = 'ESGOTADO';
}

const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);

const p1 = new Produto('Camisa', 100);
p1.desconto(50);
// console.log(p1);

p2.aumento(10);
// p2.esgotado();
// console.log(p2);


const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        value: 'Chaveiro'
    },
    preco: {
        // configurable: true,
        // enumerable: true,
        writable: true,
        value: 200
    }
});

// p3.esgotado();
p3.desconto(50);
console.log(p3);

// Anotar sobre a necessidade do 'Writable' 
// Falar também que ele pose receber os outros valores dos métodos do objeto
// Falar que se estivesse Object.prototye o objeto estaria vazio 