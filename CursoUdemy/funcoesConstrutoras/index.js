function Pessoa(nome, sobrenome){

    const ID = 24040405
    const metodoInterno = function () {
        console.log(ID);
    };


    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () =>{
        // console.log(this.nome + ' ' +  this.sobrenome + ' está conectado!');
        console.log(`${nome} ${sobrenome} está CONECTADO!`);
    }
}

const p1 = new Pessoa('Gabriel', 'Tangerina');
p1.metodo();
 