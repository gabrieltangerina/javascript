function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //ou var res = document.getElementById('res')
    if(fAno.value < 1770 || Number(fAno.value) > ano){ //Nesse caso não é necessário o Number(conversão), entretanto, assim fica mais explícito
        window.alert('Não há filmes para esse ano!')
    }
    if(fAno.value == 1970 && fAno.value < 1980){
        res.innerHTML = "O filme é Rock Balboa"
    }

}