const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const todosCurso = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evt)=>{
    evt.stopPropagation()
})

// btn_c1.addEventListener("click", (evt)=>{
//     console.log(evt.target)
// })

todosCurso.map((el) =>{
    el.addEventListener("click", (evt) =>{
        console.log(evt.target)
    })
})






