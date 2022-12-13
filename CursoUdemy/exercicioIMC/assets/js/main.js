const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso")
    const inputAltura = e.target.querySelector("#altura")

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value)
    console.log(peso, altura)
});

function criaParagrafo () {
    const paragrafo = document.createElement("p");
    return paragrafo;
}

function setResultado (msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    
    const paragrafo = criaParagrafo();
}
