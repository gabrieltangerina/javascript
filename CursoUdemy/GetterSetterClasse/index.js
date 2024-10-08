// Symbol -> Dado primitivo -> Criar uma chave privada dentro do seu objeto. A cada vez que essa função é chamada ela numca será igual a outra.
// Ele usa um descritor em seu parâmetro, mas não é necessario no caso do exemplo a seguir.
// Assim não irá ser possível acessar essa propriedade velocidade fora do objeto, ate da, mas é bem trabalhoso

const _velocidade = Symbol();

class Carro{
    constructor(nome){
        this.nome = nome;
        // this.velocidade = 0;
        this[_velocidade] = 0
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <=150; i++){
    c1.acelerar();
}

c1.velocidade = 2000;
// console.log(c1);

// Ver vídeos sobre o GETTER e SETTER.
// Ver vídeos sobre o dado primitivo Symbol;

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa();
p1.nomeCompleto = 'Gabriel Tangerina Gonzalez';
console.log(p1.nome);
console.log(p1.sobrenome);