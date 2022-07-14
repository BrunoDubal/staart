//Sets nao repetem elementos
let nomes = ['Bruno', 'Julia', 'Maui', 'Ryuk']
let nomeSets = new Set(nomes)

//adicionando elemento ao set
nomeSets.add('Davy')

//deletando um elemento do set
nomeSets.delete('Bruno')

//busca entrada de dados do set
let entradas = nomeSets.entries()
for (let entrada of entradas) {
  console.log(entrada)
}

//busca os valores do set
let valores = nomeSets.values()
for (let valor of valores) {
  console.log(valor)
}

//has verifica se o valor esta no set
if (!nomeSets.has('Mariana')) nomeSets.add('Mariana')

//size para descobrir a quantidade de itens no set
console.log(nomeSets.size)

console.table(nomeSets)
