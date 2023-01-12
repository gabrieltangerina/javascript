//  Superclass 
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Agência: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta('Bradesco', 1732, 100);
console.log(conta1);