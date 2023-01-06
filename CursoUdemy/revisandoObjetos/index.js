// Objeto literal
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Tangerina'
}

// Usando essa notação de chave você pode usar valores dinâmicos. Por isso você usa uma variável.
const chaveNome = 'nome'
const chaveSobrenome = 'sobrenome'
// console.log(pessoa[chave]);
// console.log(pessoa[chave1]);



// Você pode criar um objeto NÃO literal
// Esse é chamado de construtor
const pessoa1 = new Object();
pessoa1.nome = 'Gabrilzin';
pessoa1.sobrenome = 'Tangerinazin';
pessoa1.idade = 7;

const chave = 'sobrenome'
// console.log(pessoa1.nome);
// console.log(pessoa1[chave])




// Apagando as chaves do objeto
// delete pessoa1.nome;
// console.log(pessoa1);


pessoa1.falarNome = function(){
    return `${this.nome} está online`;
}
// console.log(pessoa1.falarNome());

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date(); //Falar que você pegou a data por meio de construtor 
    return dataAtual.getFullYear() - this.idade;
}
// console.log(pessoa1.getDataNascimento());

// Vendo as chaves do objeto pessoa1
for(let chaves in pessoa1){
    // console.log(chaves);
}

// Vendo os valores das chaves do objeto pessoa1
for(let chavesValores in pessoa1){
    // console.log(pessoa1[chavesValores]);
}


