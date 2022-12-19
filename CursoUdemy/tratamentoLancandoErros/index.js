const numeros = (n1) => {
    if(typeof n1 !== 'number') throw ("não é um numero")
    if(n1 === 2) throw('O número é 2');
    if(n1 === 3) throw('O número é 3');
}

try{
    console.log(numeros('ola'));
}catch(err){
    console.log(err);
}

// Alertar que o catch precisa estar:  console.log(err) e não uma string ex: "ocorreu um erro"