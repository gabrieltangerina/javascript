// function rand(min, max){
//         // min *= 1000;
//         // max *= 1000;
//         return Math.floor(Math.random() * (max - min) + min);
// }

function promise1(msg){
    return new Promise((resolve) =>{
        resolve(msg);
    })
}

promise1('Aprendendo Promise')
    .then((msg)=>{
        console.log(msg);
        return 'Encadeando Promises';
    })
    .then((msg)=>{
        console.log(msg);
        return 'Mais um encadeamento de Promise';
    })
    .then((msg)=>{
        console.log(msg);
    })