class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: true ,
            configurable: false
        });
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo 
    }

    sequencia(){
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigito);
        const digito2 = this.geraDigito(cpfSemDigito + digito1);
        this.novoCPF = cpfSemDigito + digito1 + digito2;
    }

    geraDigito(cpfSemDigito){
        let total = 0;
        let regressivo = cpfSemDigito.length + 1;

        for(let valores of cpfSemDigito){
            total += regressivo * Number(valores);
            regressivo--
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
}

const cpf = new ValidaCPF('070.987.720-03');

if (cpf.valida()) {
    console.log('CPF válido');
  } else {
    console.log('CPF inválido');
  }
  