//declarando o array
let frutas = new Array('Laranja')

//adiciona ao final da lista
frutas.push('Banana')
frutas.push('Morango')
frutas.push('Maça')

//adiciona no inicio da lista
frutas.unshift('Maracuja')

//remove o ultimo item do array
frutas.pop()

//remove o primeiro item do array
frutas.shift()

//remove ou substitui o item selecionado atraves do indice
frutas.splice(1, 1)
frutas.splice(0, 1, 'Abacaxi')

//conta o indice do array
console.log(frutas.length)

console.table(frutas)
