function Calculadora (){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.pegaClick();
        this.pegaEnter();
    };

    this.pegaEnter = () =>{
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.realizaConta();
        })
    }

    this.pegaValor = (valor) => {
        this.display.value += valor;
        this.display.focus();
    }
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
    this.clearDisplay = () => this.display.value = ' ';
    this.realizaConta = () => {
        let conta = this.display.value;

        try{
            conta = eval(conta);

            if(!conta) {
                alert("Conta INVÁLIDA!");
                return
            }

            this.display.value = String(conta);
        }catch(e){
            alert("Conta INVÁLIDA!");
            return
        }
    }

    this.pegaClick = () =>{
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.pegaValor(el.innerText);

            if(el.classList.contains('btn-del')) this.apagaUm();

            if(el.classList.contains('btn-clear')) this.clearDisplay();

            if(el.classList.contains('btn-eq')) this.realizaConta();
        })
    }

}

const calculadora = new Calculadora();
calculadora.inicia();