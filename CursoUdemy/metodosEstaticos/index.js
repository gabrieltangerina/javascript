//  Métodos que você pode acessar na classe sem instanciar a classe, sem utilizar a palavra "new".
// São basicamente funções que estão dentro da sua classe. 

// Existem métodos de instância e métodos estáticos

function teste(){
    console.log('Testando...')
}

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância 
    aumentarVolume(){
        this.volume += 10;
    }

    diminuirVolume(){
        this.volume -= 10;
    }

    // Método estático
    static trocarPilhas(){
        console.log('As pilhas foram trocadas')
    }
}

// const controle1 = new ControleRemoto('Sansung');
// controle1.aumentarVolume();
// controle1.aumentarVolume();
// controle1.diminuirVolume();
// console.log(controle1);

// ControleRemoto.trocarPilhas();
// console.log(controle1);


// Você pode colocar funções dentro do constructor de uma classe. Sempre que for criado um novo objeto
// essa função será acionada. Isso ocorre porque sempre que se usa o new, o constructor é chamado.

class UsandoTeste{
    constructor(){
        teste();
    }
}

const t1 = new UsandoTeste();