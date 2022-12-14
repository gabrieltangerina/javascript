//   ?       :

const pontuacaoUsuario = 1200;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

const escolhaDoUsuario = null;
const corDeFundo = escolhaDoUsuario || "green";

console.log(nivelUsuario, corDeFundo);