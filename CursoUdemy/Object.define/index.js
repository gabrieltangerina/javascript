// defineProperty -> singular, irá travar apenas uma 
// defineProperties -> plurar, irá travar duas ou mais

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor 
        writable: false, // pode alterar 
        configurable: false // configuravel
    })
}

const p1 = new Produto('Camisa', 100, 3);
console.log(Object.keys(p1));

// Achar a anotação sobre o get e o setter no caderno