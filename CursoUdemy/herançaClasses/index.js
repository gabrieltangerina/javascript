class Dispositivo {
    constructor(nome, peso){
        this.nome = nome;
        this.peso = peso;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está LIGADO`);
            return;
        }

        this.ligado = true;
        console.log(`${this.nome} LIGADO`);
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está DESLIGADO`);
            return;
        }

        this.ligado = false;
        console.log(`${this.nome} DESLIGADO`);
    }
}

const c1 = new Dispositivo('Smartphone');


class Smartphone extends Dispositivo {
    constructor(nome, peso, cor, modelo){
        super(nome, peso);
        this.cor = cor;
        this.modelo = modelo;
    }

    ligar(){
        console.log('Você mudou o método ligar')
    }
}

const s1 = new Smartphone('iPhone', 250, 'Preto', 'XS MAX');
console.log(s1.ligar());