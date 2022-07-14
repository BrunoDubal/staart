//declarando um object
const programador0 = {
  nome: 'bruno',
  nascimento: '27/11/2001',
  casado: true,
  linguaguensFavoritas: ['python', 'JavaScript']
}
console.table(programador0)

//declarando um object atraves de uma class
class programador1 {
  constructor(nome, nascimento, casado, linguagem = []) {
    this.nome = nome
    this.nascimento = nascimento
    this.casado = casado
    this.linguagem = linguagem
  }
}

const bruno = new programador1('Bruno', '27/11/2001', true, [
  'Python',
  'JavaScript'
])
console.table(bruno)
