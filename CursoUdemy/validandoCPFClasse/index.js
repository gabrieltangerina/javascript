// Código para ver se é uma sequência:
// return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
// ou
// return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
// ou
// return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;

// 070.987.720-03
// 705.484.450.52
// 111.111.111.11


class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(cpfLimpo.lenght !== 11) return false;
        if(this.sequencia()) return false;

    }

    sequencia(){
            return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = cpfLimpo.slice(0, -2);
    }

    geraDigitos(cpfSemDigitos){
        let total = 0;
        let regressivo = cpfSemDigitos.length + 1;
        for(let valores of cpfSemDigitos){
            total += regressivo * Number(valores);
            regressivo--;
        }

        const digito = 11 - (total % 11);
    }
}

const cpf = new ValidaCPF('070.987.720-03');
console.log(cpf);