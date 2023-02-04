// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
  .then(respota => carregaElementosNaPagina(respota.data));// <-- Aqui precisar ser data

// O fetch tem mais uma linha porque o respota.json retorna uma Promise e toda promise precisar ser tratada com o then.

function carregaElementosNaPagina(json){
    const table = document.createElement('table');

    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerText = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.email;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}