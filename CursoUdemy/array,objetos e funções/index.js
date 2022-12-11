let nome = "Danilo"
console.log(nome[0])

//Array -> Lista de coisas.São criados com colchetes []. Pode colocar qualquer coisa que vai funcionar.

const nomes = ['Luiz','Maria', 'João', 'Marcio']
nomes[4] = "Vinícios" 

//Para adicionar no fim usa-se: .push

nomes.push("Gustavo")

//Para adicionar no começi usa-se: .unshift

nomes.unshift("Tarafel")

//Para remover do fim 

nomes.pop()

//Para remover do começo

nomes.shift()

//Para remover um elemento de um array e não mudar o índice

delete nomes[2]
console.log(nomes)

//Para pegar ate um certo índice (fatiamento)

console.log(nomes.slice(0,3))
console.log(nomes.slice(0, -1))
