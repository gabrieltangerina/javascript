function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,

        fala(assunto = 'falando nada'){
            return `${this.nome} está ${assunto}`;  
        },

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        altura: a,
        peso: p,

        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gabriel', 'Tangerina', 1.8, 80);
p1.nomeCompleto = 'Augusto Silveira Magalhães';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());