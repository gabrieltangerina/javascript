function rand(min = 0, max = 5){
        // min *= 1000;
        // max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
}

function exibirMensagem(msg, tempo){
    return new Promise((resolve, reject) =>{
        setInterval(()=>{
            if(typeof msg !== 'string') reject();
            resolve(msg);
        }, tempo)
    })
}

// exibirMensagem('Fase 1', rand())
//     .then( valor =>{
//         console.log(valor);
//         return exibirMensagem('Fase 2', rand());
//     })
//     .then(valor =>{
//         console.log(valor);
//         return exibirMensagem('Fase 3', rand());
//     })
//     .then(valor =>{
//         console.log(valor);
//         return exibirMensagem(`Terminamos na fase: ${valor}`);
//     })
//     .then(valor =>{
//         console.log(valor);
//     })
//     .catch(e =>{
//         console.log('ERRO.')
//     })


async function executa(){
    try{
        const fase1 = await exibirMensagem('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await exibirMensagem('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await exibirMensagem('Fase 3', rand());
        console.log(fase3);
    
        console.log('Terminamos na fase: ', fase3);
    } catch(e){
        console.log('ERRO.', e);
    }
}

executa();

// Async vai permitir que você use a palavra await dentro de uma função para você esperar uma Promise ser finalizada





// promise1('Aprendendo Promise')
//     .then((msg)=>{
//         console.log(msg);
//         return 'Encadeando Promises';
//     })
//     .then((msg)=>{
//         console.log(msg);
//         return 'Mais um encadeamento de Promise';
//     })
//     .then((msg)=>{
//         console.log(msg);
//     })

