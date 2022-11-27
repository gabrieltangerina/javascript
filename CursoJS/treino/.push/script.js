let num = document.querySelector('input#n1')
let lista = document.querySelector('select#valores')
let valores = []
let erros = document.querySelector('#erros')
 

function enviar(){
    if(num.value == 0){
        erros.innerHTML = ('Digite um número')
    } else{
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value}`
        lista.appendChild(item)
        num.value = ''
        num.focus()
    }
}


// for( let pos in valores){

// }

