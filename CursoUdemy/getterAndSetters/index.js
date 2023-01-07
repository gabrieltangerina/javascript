//  Getters e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave

        configurable: false, // configuravel

        get: ()=> estoque ,

        set: (valor)=>{
            if(typeof valor !== 'number'){
                console.log('O valor precisa ser um número');
                return;
            }

            // console.log(valor);
        }
    })
}

// const p1 = new Produto('Camisa', 100, 3);
// console.log(p1);
// p1.estoque = 'O valor desejado'
// console.log(p1.estoque);

function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Teste';
console.log(p2.nome);