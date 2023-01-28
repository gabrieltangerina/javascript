function rand(min, max){
    min * 1000;
    max * 1000;
    return Math.floor(Math.random() * (max- min) + min);
}

function bancoDeDados(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg != 'string') reject('O valor não é uma string');
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

bancoDeDados('Conexão com o Banco de Dados', rand(1, 5))
    .then(resposta =>{
        console.log(resposta);
        return bancoDeDados('Buscando dados da BASE', rand(1, 3))
    })
    .then(resposta =>{
        console.log(resposta);
        return bancoDeDados('Tratando os dados', rand(1, 3))
    })
    .then( resposta =>{
        console.log(resposta);
    })
    .then( () => {
        console.log('Fim do programa');
    })
    .catch(e=>{
        console.log('ERRO.', e)
    });
