//  Factory functions / Constructor functions

// Factory functions
function criaPessoa (nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
} 
// Lembrando que com o get você transforma o método em um atributo, igual o nome e sobrenome. Assim você não precisa colocar os parenteses no final da função.

const p1 = criaPessoa('Gabriel', 'Tangerina');
// console.log(p1.nomeCompleto);
// console.log(p1);


// Constructor function
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1Factory = new Pessoa('Gabriel', 'Tangerina');
console.log(p1Factory);
