const falar = {
    falar() {
        console.log(`${this.nome} está falando!`)
    }
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo!`);
    }
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo!`);
    }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber); // OU
// const pessoaPrototype = {...falar, ...comer, ...beber};

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype , {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Gabriel', 'Tangerina');
const p2 = criaPessoa('José', 'Romario');
p1.falar();
// console.log(p1);

// Composição