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

const chave = 'sobrenome'
// console.log(pessoa1.nome);
// console.log(pessoa1[chave])




// Apagando as chaves do objeto
// delete pessoa1.nome;
// console.log(pessoa1);


pessoa1.falarNome = function(){
    console.log(`${this.nome} está online`);
}
pessoa1.falarNome();

