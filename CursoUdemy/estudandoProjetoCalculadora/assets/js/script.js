// Falar sobre o método slice no caderno;

function criaCalculadora(){
    

    return{
        display: document.querySelector(".display"),

        inicia(){
            this.cliqueBotao();
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagarUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert("Conta INVÁLIDA");
                    return
                }

                this.display.value = String(conta);
            } catch(e){
                alert("Conta INVÁLIDA");
                return
            }
        },

        cliqueBotao(){
            document.addEventListener("click", e =>{
                el = e.target;

                if(el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains("btn-clear")){
                    this.clearDisplay();
                }

                if(el.classList.contains("btn-del")){
                    this.apagarUm();
                }  

                if(el.classList.contains("btn-eq")){
                    this.realizaConta();
                }
            })
        },

    }

}

const calculadora = criaCalculadora();
calculadora.inicia();
