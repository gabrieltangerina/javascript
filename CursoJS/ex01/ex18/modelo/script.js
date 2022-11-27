let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){ /*indexOf serve para econtrar um valor, se não for encontrado, será retornado -1 */ 
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) /*push -> adiciona elementos no final do array e retorna o novo comprimento desse array*/
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) /*appednChild -> acrescenta ao elemento selecionado o que for declarado na sequência entre parênteses. */

        res.innerHTML = '' /*para quando adicionar um novo número o res ser formatado(desaparecer) */
    }else{
        window.alert('Valor inválido ou ja encontrado na lista.')
    }
    num.value = '' /*para esvaziar*/
    num.focus() /*para o cursor voltar a piscar na barrinha de colocar o número */
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / tot
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        
        res.innerHTM = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}