const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btnCopiar = document.querySelector("#btn_copiar")
const btnTirar = document.querySelector("#btn_tirar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btnCopiar.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})

btnTirar.addEventListener("click", ()=>{
    const cursosRetirados = [...document.querySelectorAll(".selecionado")]
    cursosRetirados.map((el)=>{
        caixa1.appendChild(el)
    })
})