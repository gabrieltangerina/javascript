const container = document.querySelector(".container")
const divElementos = document.createElement("div")

const elementos = [
    {tag: 'p', texto: 'Elemento paragrafo'},
    {tag: 'div', texto: 'Elemento div'},
    {tag: 'footer', texto: 'Elemento footer'},
    {tag: 'section', texto: 'Elemento section'},
];

for(let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    let tagElemento = document.createElement(tag);
    let tagTexto = document.createTextNode(texto)
    tagElemento.appendChild(tagTexto);
    divElementos.appendChild(tagElemento);
}

container.appendChild(divElementos);
