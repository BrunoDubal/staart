class deque {
  constructor() {
    this.itens = []
  }

  isEmpty() {
    return this.itens.length == 0
  }

  insertFront(item) {
    this.itens.unshift(item)
  }

  insertLast(item) {
    this.itens.push(item)
  }

  deleteFront() {
    if (this.isEmpty()) return undefined
    return this.itens.shift()
  }

  deleteLast() {
    if (this.isEmpty()) return undefined
    return this.itens.pop()
  }

  front() {
    return this.itens[0]
  }

  rear() {
    return this.itens[this.itens.length - 1]
  }
}

const deque1 = new deque()
deque1.insertFront('ferrari')
deque1.insertFront('fusca')
deque1.insertFront('civic')
console.table(deque1)

deque1.insertLast('HB20')
console.table(deque1)

deque1.deleteLast()
deque1.deleteFront()
console.table(deque1)

console.log(deque1.front())
console.log(deque1.rear())
