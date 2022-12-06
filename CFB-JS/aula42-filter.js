
const idades = [15, 21, 30, 17, 18, 44, 12, 50]

const maior = idades.filter((valor, indice, array)=>{
    if(valor >= 18)
        return valor
})

const menor = idades.filter((val)=>{
    if(val < 18)
        return val
})

console.log(idades)
console.log(maior)
console.log(menor)