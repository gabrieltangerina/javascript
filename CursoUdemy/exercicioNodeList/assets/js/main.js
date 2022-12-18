const containerParagrafos = document.querySelector(".paragrafos");
const paragrafos = document.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
// console.log(backgroundColorBody);

for (let p of paragrafos){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#fff";
}