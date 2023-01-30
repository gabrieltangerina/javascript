function aprendendoPromise(msg){
    return new Promise( (resolve, reject) =>{
        if(typeof msg != 'string') reject(e);

            resolve(msg.toUpperCase() + ' - Passei na promise');
    })
}


// aprendendoPromise('Seja bem vindo')
//     .then(resposta =>{
//         console.log(resposta);
//         return aprendendoPromise('Escolha seu personagem');
//     })
//     .then(resposta =>{
//         console.log(resposta);
//     })
//     .catch( () => {
//         console.log('ERRO.');
//     })


const promises = [
    'Acesso liberado',
    aprendendoPromise('Seja bem vindo'),
    aprendendoPromise('Escolha um personagem'),
    // aprendendoPromise(213412), // Se rodarmos o código com esse erro, aparecerá apenas o erro
    'Entrando no servidor...'
];

// Promise all -> Precisa ser passado um array para ele. Retorna um array com todos os valores. Se estiver com um valor errado só sera devolvido a mensagem de erro. 

// Promise.all(promises)
//     .then((valor)=>{
//             console.log(valor);
//     })
//     .catch((e)=>{
//         console.log('ERRO. - Promise.all');
//     })
    
// Promise race -> Sempre irá entregar o primeiro valor, será resolvido o primeiro Promise. Como na constante "promises" não tem nenhum, setTimeout ou algum delay para receber a mensagem, a string "acesso liberado" sempre será a que vai ser entregue

Promise.race(promises)
    .then((valor)=>{
        // console.log(valor);
    })
    .catch(()=>{
        // console.log('ERRO. - Promise.race');
    })

        
        


// Promise.resolve -> Como o próprio nome já diz, é uma promesa resolvida. Ele sempre irá   ser chamado pelo ".then" .
        
// Promise-reject -> É o oposto do "Promise.resolve". Ele sempre irá ser chamado pelo "catch()" .

function baixaPagina(){
    const paginaCarregada = true;

    if(paginaCarregada){
        return Promise.resolve('Página está carregada'); //Troque por resolve || reject e veja a diferença
    }else{
        return  Promise.reject(54367537); //Troque por resolve || reject e veja a diferença. Tambem troque pela função "aprendendoPromise".
    }
}

baixaPagina()
    .then((statusDaPagina)=>{
        console.log(statusDaPagina);
    })
    .then(()=>{
        console.log('Apenas testando');
    })
    .catch((e)=>{
        console.log('ERRO.');
    })


const num = [1, 2, 3, 4, 5];

// Promise.all(num)
//     .then((valor)=>{
//         console.log(valor);
//     });

// Promise.race(num)
//     .then((valor)=>{
//         console.log(valor);
//     })


// Exemplo de Promise pendente (pending)
const promise = new Promise((resolve, reject) =>{
    
});
// console.log(promise);
