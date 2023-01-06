//  Getters e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave

        configurable: false, // configuravel

        get: ()=>{
            return estoque;
        },

        set: (valor)=>{
            console.log(valor);
        }
    })
}

const p1 = new Produto('Camisa', 100, 3);
console.log(p1);
p1.estoque = 'O valor desejado'
console.log(p1.estoque);

// Achar a anotação sobre o get e o set no caderno