document.addEventListener('click', (e) =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el); // aqui estava apenas 'e'
    }
})

async function carregaPagina(el) {
    
    try{
        const href = el.getAttribute('href');
        const dadoURL = await fetch(href); // Quando usar o fetch e não tiver o then, lembre-se de usar o await. Como nesse caso aqui. Lembre tambem qu eo fetch retorna uma Promise então é inevitável o uso de then ou async/await

        if(dadoURL.status !== 200) throw new Error('ERRO!.');

        const html = await dadoURL.text(); // E como nesse caso aqui também
        carregaResultado(html);
    } catch(e){
        console.log(e);
    }
}

function carregaResultado(html){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = html;
}

// LEMBRE-SE DE COLOCAR OS CUIDADOS PARA NÃO TER ERROS.


//============================================================================
// document.addEventListener('click', e =>{
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if(tag === 'a'){
//         e.preventDefault();
//         carregaPagina(el);
//     }
// })

// async function carregaPagina(el){
// try{
//     const href = el.getAttribute('href'); // Pegando o link
//     const response = await fetch(href); // Carrega o link

//     if(response.status !== 200) throw new Error('ERRO 404!');

//     const html = await response.text(); // Convertendo o dado do fetch em texto
//     carregaResultado(html); // Chamando a função
// } catch(e){
//     console.log('Ocorreu um erro', e);
// }
// }

// // Essa função pega a div com a classe resultado e adiciona nela o texto da URL que pegamos com o fetch.
// function carregaResultado(response) {
// const resultado = document.querySelector('.resultado');
// resultado.innerHTML = response;
// } 


