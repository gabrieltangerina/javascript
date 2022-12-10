const buttonAdd=document.querySelector("#btnAddElement")
const boxElement=document.querySelector("#boxElement")


indice = 0
buttonAdd.addEventListener("click", ()=>{
    const newElement=document.createElement("div")
    newElement.setAttribute("id", "c" + (indice+1))
    newElement.setAttribute("class", "element")
    newElement.innerHTML="TESTE"
    boxElement.appendChild(newElement)
})