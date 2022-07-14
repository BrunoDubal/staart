class pilhas {
  constructor() {
    this.itens = []
  }

  pop() {
    this.itens.pop()
  }

  push(item) {
    this.itens.push(item)
  }

  top() {
    return this.itens[this.itens.length - 1]
  }

  isEmpty() {
    return this.itens.length == 0
  }
}

const pilha = new pilhas()
pilha.push(10)
pilha.push(20)
pilha.push(30)
pilha.push(40)

pilha.pop()

pilha.top()

console.log(pilha.isEmpty())

console.table(pilha)
