const nome = 'Gabriel';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Tangerina';
    falaNome();
}

usaFalaNome();