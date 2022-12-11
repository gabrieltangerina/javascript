let numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById("numeroTitulo");
const texto = document.querySelector("#texto");

numeroTitulo.innerHTML=numero;

texto.innerHTML= 
`
<p>Raiz quadrada: ${numero ** (1/2)}</p>
<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
<p>É NaN: ${Number.isNaN(numero)}</p>
<p>Arredondando para baixo: ${Math.floor(numero)}</p>
<p>Arredondando para cima: ${Math.ceil(numero)}</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}</p>
`
