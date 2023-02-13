import ValidaCPF from "./ValidaCPF";

export default class GeraCPF{
    rand(min = 100000000, max = 999999999){ // Sem os dois últimos números
        return String(Math.floor(Math.random() * (max - min) + min));
    } // floor: retorna o menor número inteiro

    formatado(cpf){
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    geraNovoCpf(){
        const cpfSemDigito = this.rand(); // Pega os primeiros 9 números
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito); 
        // Static -> Por "geraDigito" ser um método "static" ele é chamado assim, primeiro vem a classe e depois o método.
        //O que faz? Chama a classe que foi importada com o nome "ValidaCPF" e usa a função geraDigito dela com os 9 primeiros números do cpf
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1); // Faz a mesma coisa que a anterior, porém adiciona o dígito1.
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return this.formatado(novoCPF);
    }
}