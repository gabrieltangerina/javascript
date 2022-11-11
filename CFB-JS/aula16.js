/*
LOOPS:
FOR IN 
FOR OF
*/

const d1=document.getElementsByTagName("div")

for(let dados of d1){
    console.log(dados)
}

for(let qntd in d1){
    console.log(qntd)
}

/*para vc escrever os elementos usando o FOR IN*/ 
for(let qntd2 in d1){
    console.log(d1[qntd2])
}