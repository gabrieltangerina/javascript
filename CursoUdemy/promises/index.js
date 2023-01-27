function rand(min, max){
    min * 1000;
    max * 1000;
    return Math.floor(Math.random() * (max- min) + min);
}

function bancoDeDados(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

bancoDeDados('Conexão com o BD', rand(1, 3))
    .then(resposta =>{
        console.log(resposta);
        return bancoDeDados('Buscando dados da BASE', rand(1, 3))
    })
    .then(resposta =>{
        console.log(resposta);
        return bancoDeDados('Tratando os dados da BASE', rand(1, 3))
    })

    // O promise é feito na hora de chamar a função