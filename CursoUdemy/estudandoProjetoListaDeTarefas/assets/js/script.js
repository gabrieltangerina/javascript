const inputTexto = document.querySelector(".inputTexto");
const btnCriar = document.querySelector(".btnCriar");
const tarefas = document.querySelector(".tarefas");


let criarLi = () =>{
    const li = document.createElement("li")
    return li
}

let limparInput = () =>{
    inputTexto.value = "";
    inputTexto.focus();
}

let criarBotao = (li) =>{
    li.innerHTML += ' ';
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute("class", "apagar");
    li.appendChild(botaoApagar);
}

let criarTarefa = (textoInput) =>{
    let li = criarLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limparInput();
    criarBotao(li);
}

let salvarElementos = () =>{
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for(let tarefas of liTarefas){
        let tarefasTexto = tarefas.innerText;
        tarefasTexto = tarefasTexto.replace("Apagar", "").trim();
        listaDeTarefas.push(tarefasTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

let adicionaTarefasSalvas = () =>{
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

inputTexto.addEventListener("keypress", (e)=>{
    if(e.keyCode === 13){
        if(!inputTexto.value) return;
        criarTarefa(inputTexto.value);
        salvarElementos();
    }
})

document.addEventListener("click", (e)=>{
    el=e.target;
    if(el.classList.contains("btnCriar")){
        if(!inputTexto.value) return;
        criarTarefa(inputTexto.value);
        salvarElementos();
    }

    if(el.classList.contains("apagar")){
        el.parentElement.remove();
        salvarElementos();
    }
})