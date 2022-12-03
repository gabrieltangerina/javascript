const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.querySelectorAll("curso")]
// const cursosC1 = [...document.querySelectorAll("c1")]
// const cursosC2 = [...document.querySelectorAll("c2")]
const cursoEspecial = document.getElementById("c1")

const query_div_class_Todas = [...document.querySelectorAll("div[class]")]
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosC1 = [...document.querySelectorAll(".c1")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
const query_cursoEspecial = document.querySelectorAll("#c1")[0]
const query_div__p = [...document.querySelectorAll("div > p")]


// console.log(query_div_class_Todas)
console.log(query_div__p)
// console.log(query_cursosC1)
// console.log(query_cursosC2)
// console.log(query_cursoEspecial)

