function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector(".resultado");

    const pessoas = [];

    let contador = 1
    form.addEventListener("submit", (evento)=>{
        evento.preventDefault();
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push({
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value
        })

        console.log(pessoas)
        
        resultado.innerHTML= `<p>Nome:${nome.value} ${sobrenome.value}</p>  <p>Peso: ${peso.value}</p> <p>Altura: ${altura.value}</p>`
        
    });
}

meuEscopo();