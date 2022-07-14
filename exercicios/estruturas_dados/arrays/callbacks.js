const aPagarEmReais = [5, 10, 20, 40, 100]
const contasBruno = [5, 10, 20, 40, 100, [1, 2, 3, 4]]
const cotacaoDolar = 5
console.table(aPagarEmReais)

//criando outro array atraves dos valores do primeiro
const aPagarEmDolar = aPagarEmReais.map(valor => valor * cotacaoDolar)
console.table(aPagarEmDolar)

//filtrando dados do array
const aPagarContas = aPagarEmReais.filter(valor => valor >= 20)
console.table(aPagarContas)

//retornando o primeiro valor ou index da primeira ocorrencia da condição
const aPagarContas2 = aPagarEmReais.findIndex(valor => valor >= 40)
console.table(aPagarContas2)

const aPagarContas3 = aPagarEmReais.find(valor => valor >= 40)
console.log(aPagarContas3)

//retornando valor boolean se todos os valores estiverem de acordo com o requisitado
const aPagarContas4 = aPagarEmReais.every(valor => valor > 4)
console.log(aPagarContas4)

//retornando valor boolean se pelo menos um valor estiver de acordo com o requisitado
const temContaAlta = aPagarEmReais.some(valor => valor > 50)
console.log(temContaAlta)

//contatenando dois arrays
const contasCasal = aPagarContas.concat(aPagarContas2)
console.table(contasCasal)

//alterando todos os valores de um array
const contasPagas = contasCasal.fill(0)
console.log(contasPagas)

//transformar um subarray em um array principal
const novasContas = contasBruno.flat()
console.log(novasContas)

//ordenando arrays
const clientes = ['bruno', 'julia', 'mariana', 'davy']
const numeros = [5, 7, 6, 2, 9]
const clientesEstrela = [
  ['bruno', 4],
  ['julia', 7],
  ['mariana', 2],
  ['davy', 3]
]
console.log(clientes.sort())
console.log(numeros.sort((a, b) => b - a))
console.table(clientesEstrela.sort((a, b) => b[1] - a[1]))
