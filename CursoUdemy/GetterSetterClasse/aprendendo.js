class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.combustivel = 0 
        this.km = 15000
    }

    set setComb(valor){
        this.combustivel = valor;
    }

    get getComb(){
        return this.combustivel;
    }

    get getKm(){
        return this.km;
    }

}

const c1 = new Carro('Ford', 'Mustang', 'Vermelho');
c1.setComb = 100;

console.log(c1.getComb);
console.log(c1.getKm);
