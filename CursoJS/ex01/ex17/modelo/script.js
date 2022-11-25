function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')



    if(num.value == 0){
        window.alert('[ERRO!]')
    } else{
        let n = Number(num.value)
        let c = 1
        // while(c <=10){
        //     let item = document.createElement('option')
        //     item.text = `${n} x ${c} = ${n*c}`
        //     tab.appendChild(item)
        //     c++
        // }
        tab.innerHTML = ''
        for(let c = 1; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            
            item.value = `tab${c}`//Não é necessário, serve para dar valores para os value do option. Ex: 8x1=1 esse será o tab1, 8x2 será o tab2...

            tab . appendChild(item)
        }
    }
}
