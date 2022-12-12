/*
Primitivos -> São imutáveis. Exemplos: strings, number, booblean, undefined, null (bigint, symbol). -- Valores copiados
Quando colocamos:

let a = "A"
let b = a 
console.log (a, b)--> O resultado será: A A

a = 'Outra coisa'
console.log(a, b)--> O resultado será: Outra coisa A
*B-> Não mudará seu valor pois ele é uma CÓPIA

Referencia--> São mutáveis.Exemplos: arrays, objects, fuction. --> Valores passados por referência

let a = [1,2,3]
let b = a

*Todo o valos que colocarmos ou tirarmos em a ou em b mudará o valor de ambos.
*Isso só muda se usar os SPREADS [...]
*/
