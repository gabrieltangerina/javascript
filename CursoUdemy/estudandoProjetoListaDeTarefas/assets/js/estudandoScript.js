const inputTexto = document.querySelector(".inputTexto");
const btnCriar = document.querySelector(".btnCriar");
const tarefas = document.querySelector(".tarefas");

let criarLi = ()=>{
    const li = document.createElement("li");
    return li
}

function limparInput (){
    inputTexto.value = '';
    inputTexto.focus();
}

const criarBotao = (li)=>{
    li.innerHTML += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute("class", "apagar");
    li.appendChild(botaoApagar);
}

const criarElemento = (textoInput)=>{
    const li = criarLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limparInput();
    criarBotao(li);
}

let salvarTarefas = () =>{
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
}

let adicionarTarefas = () => {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefas of listaDeTarefas){
        criarElemento(tarefas);
    }
}
adicionarTarefas();

inputTexto.addEventListener("keypress", (e)=>{
    if(e.keyCode === 13){
        criarElemento(inputTexto.value);
        salvarTarefas();
    }
})

document.addEventListener("click", (e)=>{
    el = e.target;

    if(el.classList.contains('btnCriar')){
        if(!inputTexto.value) return;
        criarElemento(inputTexto.value);
        salvarTarefas();
    }

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})