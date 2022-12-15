// const text = document.querySelector("#text");
// const hours = document.querySelector("#hours")

// const data = new Date();

// const dateOfWeek = data.getDay();
// const dateDay = data.getDate();
// const dateOfMonth = data.getMonth();
// const dateYear = data.getFullYear();

// let textHours = leftZero(data.getHours());
// let textMinutes = leftZero(data.getMinutes());
// let textSecondes = leftZero(data.getSeconds());

// function leftZero(num){
//     return num >= 10 ? num : `0${num}`;
// }

// function nameDayOfWeek(){
//     const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    
//     return daysOfWeek[dateOfWeek];
// }

// function nameMonth(){
//     const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

//     return months[dateOfMonth];
// }



// hours.innerHTML = `${textHours}:${textMinutes}:${textSecondes}`
// text.innerHTML = `${nameDayOfWeek()}, ${dateDay} de ${nameMonth()} de ${dateYear} `;

const hours = document.querySelector("#hours");
const text = document.querySelector("#text");
const data = new Date();

let textHours = leftZero(data.getHours());
let textMinutes = leftZero(data.getMinutes());
let textSecondes = leftZero(data.getSeconds());

function leftZero(num){
    return num >= 10 ? num : `0${num}`;
}


hours.innerHTML = `${textHours}:${textMinutes}:${textSecondes}`
text.innerHTML = data.toLocaleDateString("pt-BR", {dateStyle: 'full',})

//O do video estava assim:
// h1.innerHTML = data.toLocaleDateString('pt-br', {dateStyle: 'full', timeStyle: 'short' });