const caixa1=document.querySelector("#caixa1")
const cursos=["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

const caixa2=document.querySelector("#refresh")

cursos.map((el, indice)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+(indice+1))
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src","./iconedelete.png")
    btn_lixeira.setAttribute("class", "lixeira")
    btn_lixeira.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })

    
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
    
})

              /*Criando o botão de RELOAD */
const botao = document.createElement("button")
botao.setAttribute("class", "button")
botao.innerHTML="Atualizar"
caixa2.appendChild(botao)

botao.addEventListener("click", ()=>{
    location.reload()
})



