class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e); //A função será realizada quando o formulário for enviado (quando o botão enviar for clicado);
        })
    }

    handleSubmit(e){
        e.preventDefault(); // Evitando o formulário ser enviado
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas(){
        let valid = true

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres');
        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true;

        for(let removerErros of this.formulario.querySelectorAll('.error-text')){
            removerErros.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const p = campo.previousElementSibling.innerText;
            
            if(!campo.value){
                this.criaErro(campo, `O campo "${p}" precisa estar preenchido` );
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Usuário precisa conter apenas letras e números')
            valid = false;
        }

        return valid;
    }


    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) { // este método valida() vem de dentro do class ValidaCPF(diferente do validaCPF). Esse método retorna true para cpf validos e false para cpf não validos
            this.criaErro(campo, 'CPF inválido');
            return false
        }

        return true
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerText = msg
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();

// Pesquisar para que serve o método match()


// Campo -> é o input. 
// p -> pega o irmão anterior do campo
// Na linha 34, chama-se a função que retorna um resultado. Se o resultado for false, ou seja, o cpf seja inválido, com o operador de negação o if fica true e assim o que está dentro do if é feito.