const caixaCursos= document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2= document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("caixaCursoSelecionado")
const btnRemoveCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdiconarNovoCursoDepois=document.getElementById("btnAdiconarNovoCursoDepois")
const nomeCurso=document.getElementById("nomeCurso")


let indice = 0
const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = `${curso} -> ${(indice+1)}º`

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_cursos")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)

    return novoElemento
}

// FUNÇÃO PARA CRIAR UM NOVO ELEMENTO
cursos.map((el, chave) =>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

//FUNÇÃO PARA DESCOBRIR O ITEM CLICADO
const radioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((el,ind,arr)=>{
        return el.checked
    })
    return radioSelecionado[0] //Porque do [0]??
}

// CURSO SELECIONADO
btnCursoSelecionado.addEventListener("click", (evt)=>{
    const rs= radioSelecionado()
    if(rs!=undefined){
        const cursoSelecionado= rs.parentNode.parentNode.firstChild.textContent
        console.log(cursoSelecionado)
        alert("O curso selecionado foi: " + cursoSelecionado)
    }else[
        alert("Selecione um curso")
    ]
})

// REMOVER O CURSO
btnRemoveCurso.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }else{
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt)=>{
    const rs=radioSelecionado()
    try{
        if(nomeCurso.value!=""){
            const cursoSelecionado=rs.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        }else{
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnAdiconarNovoCursoDepois.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    try{
        if(nomeCurso.value!=""){
            const cursoSelecionado=rs.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        }else{
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})


