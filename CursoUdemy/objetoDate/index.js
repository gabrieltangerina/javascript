// const data = ();
// // console.log(data);

// console.log("Dia", data.getDate())
// console.log("Mes", data.getMonth())
// console.log("Ano", data.getFullYear())
// console.log("Hora", data.getHours())
// console.log("Minuto", data.getMinutes())
// console.log("Segundo", data.getSeconds())
// console.log("Milesimo", data.getMilliseconds())
// console.log("Dia Semana", data.getDay())

// function zeroEsquedar (num){
//     return num >= 10 ? num : `0${num}`;
// }

// function formataData (data){
//     const Dia = zeroEsquedar(data.getDate());
//     const Mes = zeroEsquedar(data.getMonth());
//     const Ano = zeroEsquedar(data.getFullYear());
//     const Hora = zeroEsquedar(data.getHours());
//     const Minuto = zeroEsquedar(data.getMinutes());
//     const Segundo = zeroEsquedar(data.getSeconds());
//     const Milesimo = zeroEsquedar(data.getMilliseconds());
//     const DiaSemana = zeroEsquedar(data.getDay());

//     return `${Dia}/${Mes}/${Ano}    ${Hora}:${Minuto}:${Segundo}`
// }

// const data = new Date();
// const dataBrasil = formataData(data);
// console.log(dataBrasil); 

let seconds=0;
const data = new Date(0);
const horario = data.toLocaleTimeString("pt-br", {timeZone: "GMT"});
console.log(horario);


// console.log(dataZerada.toLocaleTimeString('pt-br', {timeZone: "GMT"}));