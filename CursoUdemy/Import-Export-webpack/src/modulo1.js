export const nome = "Adam";
export const sobrenome = "Sandler";

function falaNome(nome, sobrenome){
    return nome + ' ' + sobrenome;
};

export default class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
};