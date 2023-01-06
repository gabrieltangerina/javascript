// Travando o valor do valor da variavel const

// Lembre-se de diferenciar a troca da "refencia da memoria" com a troca do valor da variável
function Pessoa (nome, sobrenome)  {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

const p1 = new Pessoa('Gabriel', 'Tangerina');

p1.nome = 'Junior'; //Troca de um valor dentro do valor da variável
 
// p1 = 'Outra coisa'; //Troca do valor da refencia da memoria do valor da variável. Dará erro

console.log(p1);
