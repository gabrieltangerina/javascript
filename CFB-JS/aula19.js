for(var i = 10; i > 0; i-- ){
    console.log(i)

    if(i ===5){
        continue
    }
}

console.log('Fim do programa')
console.log('------------------------------------')

n=10

while(n<100){
    n+=10

    if(n==50){
        continue
    }

    console.log('Testando continue ' + n)
}