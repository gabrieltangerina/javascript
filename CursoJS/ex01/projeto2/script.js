function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')//Colocou um id para a tag img
    //ou var res = document.getElementById('res')
    if(fAno.value < 1770 || Number(fAno.value) > ano){ //Nesse caso não é necessário o Number(conversão), entretanto, assim fica mais explícito
        window.alert('Não há filmes para esse ano!')
    }
    if(fAno.value >= 1970 && fAno.value < 1980){
        res.innerHTML = "O filme é Rock Balboa"
        img.setAttribute('src', 'rock-70.png')
        res.appendChild(img)//appendChild - é para colocar um conteúdo em baixo(adicionar um elemento)
    } 
    if(fAno.value >= 1980 && fAno.value < 1990){
        res.innerHTML = "O filme é ET"
        img.setAttribute('src' , 'et-80.png')
        res.appendChild(img)
    }
    if(fAno.value >= 1990 && fAno.value < 2000){
        res.innerHTML = "O filme é Forest Gump"
        img.setAttribute('src' , 'forestgump-90.png')
        res.appendChild(img)
    }
    if(fAno.value >= 2000 && fAno.value < 2010){
        res.innerHTML = "O filme é Batman"
        img.setAttribute('src', 'batman-00.png')
        res.appendChild(img)
    }
    if(fAno.value >= 2010 && fAno.value < 2020){
        res.innerHTML = "O filme é Gente Grande"
        img.setAttribute('src','gentegrande-10.png')
        res.appendChild(img)
    }
    if(fAno.value >= 2020){
        res.innerHTML = "O filme é Vingança e Castigo"
        img.setAttribute('src','vingancacastigo-20.png')
        res.appendChild(img)
    }
}