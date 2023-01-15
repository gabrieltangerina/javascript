//  É uma função. Ele retorna um objeto do tipo symbol que tem um identificador único. É usado para identificar propriedades dentro de classes ou toda vez que precisar gerar um identificador único de algum elemento dentro do JavaScript, seja ele para classe ou qualquer outro tipo de objeto. Basicamente ele sempre vai retornar um elemento do tipo Symbol que tenha um identificador único. 

const c1 = Symbol();
const c2 = Symbol();
const c3 = Symbol.for('gabriel');
const c4 = Symbol.for('tangerina');

// console.log(c3 === c4);
// console.log(Symbol.keyFor(c4));

// console.log(c1);
// console.log(c2);

const teste = c1 === c2;

// console.log(teste);
// console.log(typeof c1);

class Jogador{
    constructor(nome){
        this.nome = nome;
        this.id = Symbol();
    }
}

let jogadores = [new Jogador('Pelé'), new Jogador('Cafu'), new Jogador('Neymar'), new Jogador('Hulk'),
new Jogador('Messi'), new Jogador('Neymar'), ];

// let s1 = jogadores[0].id;

nomeJogadores = jogadores.filter((el)=>{
    return el.nome == 'Neymar';
})

idJogadores = nomeJogadores.map((el)=>{
    return el.id
})

idTodosJogadores = jogadores.map((el)=>{
    return el.id
})

// console.log(jogadores); // Todos os jogadores
// console.log(idTodosJogadores);
// console.log(nomeJogadores); // Os jogadores que tem nome igual a 'Neymar'
// console.log(idJogadores); // Os Symbol dos jogadores que tem nome 'Neymar'

const meuObjeto = {nome: 'TreinaWeb'};

// console.log(meuObjeto['nome']); 

const nome = Symbol('Descrição');
// console.log(nome.description);


const nomeA = Symbol();
const numeroA = Symbol();
const corUniformeA = Symbol();

const JogadorA = {
    [nomeA]: "Neymar",
    [numeroA]: 10,
    [corUniformeA]: 'Amarelo'
}

for (p in JogadorA){
    console.log(p);
}

console.log(JogadorA[nomeA]);