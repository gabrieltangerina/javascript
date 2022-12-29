// Falar sobre o método slice no caderno;

function criaFuncao(){

    return{
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotao();
        },

        valorBotao(valor){
            this.display.value += valor;
        },

        clearInput(){
            this.display.value = ' ';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert("Conta INVÁLIDA!");
                    return
                }

                this.display.value = String(conta);
            }catch(e){
                alert("Conta INVÁLIDA");
                return
            }

        },

        cliqueBotao(){
            document.addEventListener('click', e => {
                el = e.target;

                if(el.classList.contains('btn-num')){
                    this.valorBotao(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearInput();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            })
        },
    }

};

const calculadora = criaFuncao();
calculadora.inicia();
