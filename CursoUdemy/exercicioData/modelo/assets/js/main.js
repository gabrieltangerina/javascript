const text = document.querySelector("#text");
const hours = document.querySelector("#hours")

const data = new Date();

const dateOfWeek = data.getDay();
const dateDay = data.getDate();
const dateOfMonth = data.getMonth();
const dateYear = data.getFullYear();

const textHours = data.getHours();
const textMinutes = data.getMinutes();
const textSecondes = data.getSeconds();


function nameDayOfWeek(){
    let textDateWeek
    if (dateOfWeek === 0) textDateWeek = "Domingo";
    if (dateOfWeek === 1) textDateWeek = "Segunda-feira";
    if (dateOfWeek === 2) textDateWeek = "Terça-feira";
    if (dateOfWeek === 3) textDateWeek = "Quarta-feira";
    if (dateOfWeek === 4) textDateWeek = "Quinta-feira";
    if (dateOfWeek === 5) textDateWeek = "Sexta-feira";
    if (dateOfWeek === 6) textDateWeek = "Sábado";
    return textDateWeek
}

function nameMonth(){
    let textDateMonth
    if(dateOfMonth === 0) textDateMonth = "Janeiro";
    if(dateOfMonth === 1) textDateMonth = "Fevereiro";
    if(dateOfMonth === 2) textDateMonth = "Março";
    if(dateOfMonth === 3) textDateMonth = "Abril";
    if(dateOfMonth === 4) textDateMonth = "Maio";
    if(dateOfMonth === 5) textDateMonth = "Junho";
    if(dateOfMonth === 6) textDateMonth = "Julho";
    if(dateOfMonth === 7) textDateMonth = "Agosto";
    if(dateOfMonth === 8) textDateMonth = "Setembro";
    if(dateOfMonth === 9) textDateMonth = "Outubro";
    if(dateOfMonth === 10) textDateMonth = "Novembro";
    if(dateOfMonth === 11) textDateMonth = "Dezembro";
    
    return textDateMonth
}


hours.innerHTML = `${textHours}:${textMinutes}:${textSecondes}`
text.innerHTML = `${nameDayOfWeek()}, ${dateDay} de ${nameMonth()} de ${dateYear} `



