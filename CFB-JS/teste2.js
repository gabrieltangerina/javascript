function parimpar(n){
    if (n%2==0){
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}

console.log(parimpar(3))

///////////////////////////////////////////////////////////////

function soma(n1=0,n2=0){
    return n1 + n2
}

console.log(soma(2))

///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////

function fatorial(n){
    let fat = 1
    for(let c=n;c>1;c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
/////////////////////////////////////////////
/*----------OBJETOS-------------*/

let amigo = {nome:'Gabriel',
sexo:'M',
peso:80,
engordar(p=0){
    this.peso += p
}}
amigo.engordar(5)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)
