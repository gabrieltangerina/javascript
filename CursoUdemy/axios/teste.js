document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(el.classList.contains('abrir')){
        e.preventDefault();
        carregaPagina(el);
    }

    if(el.classList.contains('fechar')){
        e.preventDefault();
        fechaPagina();
    }
})
const resultado = document.querySelector('.resultado');

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const dadoURL = await fetch(href);
        const json = await dadoURL.json();
        // const dadoURL = await axios(href);
        // const data = await dadoURL.data

        resultado.innerHTML = ' ';
        // resultado.innerHTML = pessoa;
        
        // for(let pessoa of data){
        //     console.log(typeof pessoa);
        //     resultado.innerHTML += pessoa;
        // }
        for(let pessoa of json){
            // const teste = JSON.stringify(pessoa);
            // console.log(json);
            resultado.innerHTML += pessoa.nome + ' ' + pessoa.idade + ' / '
        }

        // carregaResultado(json);
    } catch(e) {
        console.log(e);
    }
}

function fechaPagina(){
    resultado.innerHTML = ' ';
}