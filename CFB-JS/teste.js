function nome(mensagem){
    console.log(mensagem)
}

nome('Olá')

function soma(a,b){
    return a+b
}

console.log(soma(2,2))

function somaCallback(a,b,fnCallback){
    return fnCallback(a+b)
}

var multiplica =function(total){
    return total * 2
}

console.log(somaCallback(10,3,multiplica))



