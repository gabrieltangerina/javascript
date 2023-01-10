// Camiseta -> cor;  caneca -> caneca

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(aumentoReais){
    this.preco += aumentoReais;
}

Produto.prototype.desconto = function(descontoReais){
    this.preco += descontoReais;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(descontoDe){
    this.preco = this.preco + (this.preco * (descontoDe / 100))
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Camiseta.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('HIGH', 100, 'Branca');
camiseta.aumento(50);
console.log(camiseta);

const produto = new Produto('GENERICO', 270);
console.log(produto);

const caneca = new Caneca('Canequinha', 50, 'Porcelana', 10);
// caneca.aumento(50);
caneca.estoque = 100; // SET
console.log(caneca); // GET