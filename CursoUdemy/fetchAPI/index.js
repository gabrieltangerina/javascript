// document.addEventListener('click', (e) =>{
//     e.preventDefault();
//     const el = e.target;
//     const atributo = el.getAttribute('href');
//     const atributoDois = el.getAttribute('class');

//     console.log(atributo, atributoDois);
// })

// const pegandoElemento = document.querySelector('.classePagina1');
// const atributo = pegandoElemento.getAttribute('href');
// console.log(atributo);


document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 404!');

        const html = await response.text();
        carregaResultado(html);
    } catch(e){
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// getAttribute retorna o valor de um argumento específico do elemento. Pegar o valor de determinado atributo de um elemento.
