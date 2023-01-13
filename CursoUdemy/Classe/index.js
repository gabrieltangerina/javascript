//  É a mesma coisa que função construtora, apenas um modo diferente de escrever.

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    comer(){
        console.log(`${this.nome} está comendo` );
    }

    beber(){
        console.log(`${this.nome} está bebendo` );        
    }

    falar(){
        console.log(`${this.nome} está falando` );        
    }
}

const p1 = new Pessoa('Gabriel', 'Tangerina');
console.log(p1);