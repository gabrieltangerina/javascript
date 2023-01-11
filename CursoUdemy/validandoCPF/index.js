function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    let novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;  
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) =>{
        ac += regressivo * Number(val);
        regressivo--;
        return ac;
    }, 0)

    let digito = 11 - (total % 11);
    return digito > 9 ? 0 : String(digito);

}

const cpf = new ValidaCPF("070.987.720-03");
console.log(cpf.valida());
// console.log(cpf.cpfLimpo);

// 070.987.720-03
// 705.484.450.52
// 111.111.111.11
