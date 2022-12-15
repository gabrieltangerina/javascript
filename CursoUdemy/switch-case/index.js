const data = new Date();
const diaDaSemana = data.getDay();

function getDayOfTheWeek(){
    let dayOfTheWeek 
    if(diaDaSemana === 1) dayOfTheWeek = "Segunda";
    if(diaDaSemana === 2) dayOfTheWeek = "Terça";
    if(diaDaSemana === 3) dayOfTheWeek = "Quarta";
    if(diaDaSemana === 4) dayOfTheWeek = "Quinta";
    if(diaDaSemana === 5) dayOfTheWeek = "Sexta";
    if(diaDaSemana === 6) dayOfTheWeek = "Sábado";
    if(diaDaSemana === 0) dayOfTheWeek = "Domingo";
    return dayOfTheWeek
}
const dayOfWeek = getDayOfTheWeek()
console.log(diaDaSemana, dayOfWeek);