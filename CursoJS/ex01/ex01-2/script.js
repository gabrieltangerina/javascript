function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 5 && hora < 12){
        //BOM DIA
        img.src = 'manha.png'
    } if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'tarde.png'
    } if(hora > 18 && hora < 5){
        //BOA NOITE
        img.src = 'noite.png'
    }
}
