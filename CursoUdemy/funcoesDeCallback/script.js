// function newButton (text, callback) {
//     const body = document.querySelector("body");
//     const botao = document.createElement("button");
//     botao.textContent = text;

//     callback(botao);
//     console.log("Fim da execição")

//     body.insertAdjacentElement("beforeend", botao);

//     return botao
// }

// newButton('Login', (button) =>{
//     button.style.cssText = `
//         font-size: 50px;
//         color: blue;
//     `
// });

function f1Funcao (callback){
    console.log('F1');
    if (callback) callback();
}

f1Funcao( ()=>{
    console.log('Fim do programa');
});