function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var comprimento = window.document.getElementById('comprimento')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#F4C8AD'
        comprimento.innerHTML = 'Bom dia!'
    } else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#C3DBE7'
        comprimento.innerHTML = 'Boa tarde!'
    } else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#674C71'
        comprimento.innerHTML = 'Boa noite!'
    }
}
