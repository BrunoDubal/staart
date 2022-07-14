let meuDicionario = new Map()
//adicionando itens ao dicionario
meuDicionario.set('oi', 'Oi, tudo bem?')
meuDicionario.set('blz', 'Beleza')
meuDicionario.set('vc', 'Você')

//deletando itens do dicionario
meuDicionario.delete('vc')

//verificando se um item existe no dicionario
if (!meuDicionario.has('vc')) meuDicionario.set('vc', 'Você')

//varrendo o map
meuDicionario.forEach((valor, chave) => console.log(`${chave} : ${valor}`))

//buscando as entradas
for (let entradas of meuDicionario.entries()) {
  console.log(entradas)
}

//buscando os valores
for (let valor of meuDicionario.values()) {
  console.log(valor)
}

//buscando as keys
for (let chaves of meuDicionario.keys()) {
  console.log(chaves)
}

console.table(meuDicionario)

const palavra = meuDicionario.get('blz')
console.log(palavra)
