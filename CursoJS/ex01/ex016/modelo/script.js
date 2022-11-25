function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value == 0 || fim.value == 0 || pas.value == 0){
        res.innerHTML = 'Preecha corretamente os espaços acima!'
    }else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} -->` // o += serve para acrescentar o próximo número
            }
        }else{
            // for(let c = i; c >= f; c -= p){
            //     res.innerHTML += `${c} -->`
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c}-->`
            }
        }
        res.innerHTML += 'FIM!'
    }
}

// function contar(){
//     let ini = document.getElementById('txti')
//     let fim = document.getElementById('txtf')
//     let passo = document.getElementById('txtp')
//     let res = document.getElementById('res')

//     if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
//         res.innerHTML = 'Impossível contar!'
//     } else{
//         let i = Number(ini.value) //pegando o valor de 'ini'e convertendo em número
//         let f = Number(fim.value)
//         let p = Number(passo.value)

//         if(i < f){
//             //Contagem crescente
//             for(let c = i; c <= f; c = c + p){
//                 res.innerHTML += `${c} -->` 
//             }
//         } else{
//             //Contagem regressiva 
//             for(let c = i; c >= f; c -= p){
//                 res.innerHTML += `${c} -->`
//             }
//         }
//         res.innerHTML += 'FIM!'
//     }
// }