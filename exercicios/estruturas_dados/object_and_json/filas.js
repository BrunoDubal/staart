class filas {
  constructor() {
    this.itens = []
  }

  enqueue(item) {
    this.itens.push(item)
  }

  isEmpty() {
    return this.itens.length == 0
  }

  dequeue() {
    if (this.isEmpty()) return undefined

    return this.itens.shift()
  }

  front() {
    return this.itens[0]
  }

  rear() {
    return this.itens[this.itens.length - 1]
  }
}

const fila = new filas()
console.log(fila.isEmpty())
fila.enqueue('Ferrari')
fila.enqueue('Fusca')
fila.enqueue('Civic')
console.table(fila)
console.log(fila.isEmpty())
fila.dequeue()
console.table(fila)
console.log(fila.rear())
console.log(fila.front())
