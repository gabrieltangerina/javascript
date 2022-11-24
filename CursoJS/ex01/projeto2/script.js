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
        res.appendChild(img)
        sobre.innerHTML = "Rocky Balboa, um pequeno boxeador da classe trabalhadora da Filadélfia, é arbitrariamente escolhido para lutar contra o campeão dos pesos pesados, Apollo Creed, quando o adversário do invicto lutador agendado para a luta é ferido. Durante o treinamento com o mal-humorado Mickey Goldmill, Rocky timidamente começa um relacionamento com Adrian, a invisível irmã de Paulie, seu amigo empacotador de carne. Filmes disponível na Amazon Prime Video."
        document.getElementById('sobre').style.backgroundColor = '#9E53DF'
    } 
    if(fAno.value >= 1980 && fAno.value < 1990){
        res.innerHTML = "O filme é ET"
        img.setAttribute('src' , 'et-80.png')
        res.appendChild(img)
        sobre.innerHTML = "O garoto Elliott faz amizade com um pequeno alienígena inofensivo que está bem longe do seu planeta. Ele decide manter a adorável criatura em segredo e em casa após apresentá-la aos irmãos. Filme disponível na Amazon Prime Video."
        document.getElementById('sobre').style.backgroundColor = '#9E53DF'
    }
    if(fAno.value >= 1990 && fAno.value < 2000){
        res.innerHTML = "O filme é Forest Gump"
        img.setAttribute('src' , 'forestgump-90.png')
        res.appendChild(img)
        sobre.innerHTML = 'Mesmo com o raciocínio lento, Forrest Gump nunca se sentiu desfavorecido. Graças ao apoio da mãe, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietnã ou como capitão de um barco de pesca de camarão, Forrest inspira a todos com seu otimismo. Mas a pessoa que Forrest mais ama pode ser a mais difícil de salvar: seu amor de infância, a doce e perturbada Jenny. Filme disponível na Netflix.'
        document.getElementById('sobre').style.backgroundColor = '#9E53DF'
        document.getElementById('filme').style.backgroundColor = '#5E0CA6'
    }
    if(fAno.value >= 2000 && fAno.value < 2010){
        res.innerHTML = "O filme é Batman"
        img.setAttribute('src', 'batman-00.png')
        res.appendChild(img)
        sobre.innerHTML = 'Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade. O justiceiro será testado psicologicamente e fisicamente como nunca fora antes em um confronto bastante pessoal. Cabe a Batman encontrar uma maneira de deter o sádico vilão antes que mais vidas sejam perdidas. Filme disponível na HBO MAX.' 
        document.getElementById('sobre').style.backgroundColor = '#9E53DF'
    }
    if(fAno.value >= 2010 && fAno.value < 2020){
        res.innerHTML = "O filme é Gente Grande"
        img.setAttribute('src','gentegrande-10.png')
        res.appendChild(img)
        sobre.innerHTML = 'A morte do treinador de basquete da infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade. Filme disponível na Netflix.'
        document.getElementById('sobre').style.backgroundColor = '#9E53DF'
    }
    if(fAno.value >= 2020){
        res.innerHTML = "O filme é Vingança e Castigo"
        img.setAttribute('src','vingancacastigo-20.png')
        res.appendChild(img)
        sobre.innerHTML = 'Querendo vingança, o bandido Nat Love reúne seu bando para derrotar o impiedoso Rufus Buck, um criminoso que acabou de sair da prisão. Filme disponível na Netflix.'
        document.getElementById('sobre').style.backgroundColor = '#9E53DF'
    }
}