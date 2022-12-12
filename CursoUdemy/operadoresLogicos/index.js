/*
Operadores lógicos
&& -> and -> E *Todas as expressões precisam ser verdadeiras para retornar TRUE. Se uma for FALSE, retornará FALSE
|| -> or -> OU *Apenas uma expressão precisa ser verdadeira para retornar TRUE
!  -> not -> NÃO *Inverte a expressão
*/

// const expressaoAnd = true && true && true;
// const expressaoOr = false || true || false || false;
// console.log(expressaoAnd);

const usuario = "Gabriel";
const senha = "12345";

const vaiLogar = usuario && senha !== "";

console.log(vaiLogar);

console.log(!true);

