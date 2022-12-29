function criaCalculadora(){

    return {
        inicia(){
            console.log("INICIADO");
        }
    }

}

const calculadora = criaCalculadora();
calculadora.inicia();



// // Anotar sobre o this para a arrow function e sobre a função normal. Evidenciar quem a está chamando, já que o "this" faz referencia a quem o chamou.

// function criaCalculadora(){
//     return{
//         display: document.querySelector('.display'),
        
//         inicia(){
//             this.cliqueBotoes();
//         },

//         clearDisplay(){
//             this.display.value = '';
//         },

//         apagaUm(){
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         realizaConta(){
//             let conta = this.display.value;

//             try{
//                 conta = eval(conta);

//                 if(!conta){
//                     alert("Conta inválida!");
//                     return 
//                 }

//                 this.display.value = String(conta);
//             } catch(e){
//                 alert("Conta inválida!");
//                 return;
//             }
//         },


//         cliqueBotoes() {
//             document.addEventListener("click", function(e) {
//                 const el = e.target;

//                 if(el.classList.contains('btn-num')){
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if(el.classList.contains('btn-clear')){
//                     this.clearDisplay();
//                 }

//                 if(el.classList.contains('btn-del')){
//                     this.apagaUm();
//                 }

//                 if(el.classList.contains("btn-eq")){
//                     this.realizaConta();
//                 }

//             }.bind(this)); //Precisa disso para que o "this" usado seja o da calculadora e não o do document, já que é o document quem está chamando a função.
//             // Se fosse uma arrow funciton o this já ia ser na calculadora já que é ela quem esta chamando.
//         },

//         btnParaDisplay(valor){
//             this.display.value += valor;
//         },
//     };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia(); //Aqui podemos ver que quem está chamando é a calculadora, então quando se usa o "this" é para isso.