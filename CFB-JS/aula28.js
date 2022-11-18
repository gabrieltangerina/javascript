/*metodo MAP */

let el=document.getElementsByTagName("div")
el=[...el]
el.map((e,i)=>{
    console.log(e.innerHTML)
})

// const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// let c=cursos.map((el,i)=>{
//     return el
//})

// console.log(c)