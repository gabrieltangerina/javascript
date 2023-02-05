document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        recebePagina(el);
    }
})

async function recebePagina(el){

    try{
        const href = el.getAttribute('href');
        const dadoRecebido = await axios(href);
        const html = await dadoRecebido.data;
        carregaPagina(html);
    } catch(e){
        console.log(e);
    }
}

function carregaPagina(html){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = html;
}



// Tentando obter informações usando apenas um documento json.

// const chars =  axios("chars.json")
    // .then(response => console.log(response.data[0].classe));
    // .then(response => response.data);

// const resultado = document.querySelector('.resultado');

// document.addEventListener('click', e =>{
//     el = e.target;
//     e.preventDefault();

//     if(el.classList.contains('lutador')){
//         resultado.innerHTML = axios("chars.json").then(response => (response.data));
//     }
// })
    

