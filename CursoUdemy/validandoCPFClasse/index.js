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
        if(!this.cpfLimpo) return false
        if()
    }
}