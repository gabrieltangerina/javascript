const pessoa = {
    nome: "Gabriel",
    sobrenome: "Tangerina",
    idade: "17",
    endereco: {
        rua: "Rua Martins",
        numero: 320,
        cidade: "São Carlos",
        bairro: "Jardim Nova"
    }
};

const { nome = "Não colocou", ...resto} = pessoa;
console.log(nome, resto);

const {endereco: {rua = "Não foi dito", numero, ...restoEndereco}} = pessoa; 
console.log(rua, numero, restoEndereco);
