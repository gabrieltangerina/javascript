//  IIFE -> Immediately invoked function expression 

(function(idade, peso, altura){
    const sobrenome = 'Tangerina';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Gabriel'));
    }

    falaNome();
    console.log(idade, peso, altura);
})('17 anos', ' 80Kg', ' 1.80 metros');