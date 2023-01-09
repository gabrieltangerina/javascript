// A base que o js utiliza para fazer herança, para trabalhar com programação orientada a objetos

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

const pessoa1 = new Pessoa('Gabriel', 'Tangerina');
console.log(pessoa1);