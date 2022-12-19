// const retornaHora = (data) =>{
//     if(data && !(data instanceof Date)){
//         throw new TypeError("Esperando instância de Date.");
//     }
//     if(!data){
//         data = new Date();
//     }

//     return data.toLocaleTimeString("pt-br", {

//     });
// }

// const hora = retornaHora();
// console.log(hora)

const numero = (n1) => {
    if(typeof n1 !== 'number') throw("O valor NÃO é um número");
    if(n1 === 2) throw ("O valor é 2");
    if(n1 === 3) throw ("O valor é 3");
    if(n1 === 4) return "Não há erros"
} 

try{
    console.log(numero(4));
}catch(err){
    console.log(err);
}finally{
    console.log("FIM DO PROGRAMA!");
}