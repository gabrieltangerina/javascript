const buttonAdd=document.querySelector("#btnAddElement")
const boxElement=document.querySelector("#boxElement")
const inputText=document.querySelector("inputText")


buttonAdd.addEventListener("click", ()=>{

    const newElement=document.createElement("div")
    newElement.setAttribute("class", "element")

    // newElement.innerHTML="ESSA MERDA!"

    const newElementContent=document.createElement("p")
    const textContent=inputText.value
    console.log(textContent)
    // newElementContent.innerText=textContent

    // const textInput = inputText.textContent
    // // newElementContent.innerText=text
    // console.log(textInput)

    newElement.appendChild(newElementContent)
    boxElement.appendChild(newElement)
})
