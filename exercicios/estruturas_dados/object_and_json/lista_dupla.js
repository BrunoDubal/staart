class no {
  constructor(elemento, proximo = null, anterior = null) {
    this.elemento = elemento
    this.proximo = proximo
    this.anterior = anterior
  }
}

class listaDupla {
  constructor(head = null, tail = null, count = 0) {
    this.head = head
    this.tail = tail
    this.count = count
  }

  insertFirst(elemento) {
    let novo = new no(elemento)
    let atual
    if (this.count === 0) {
      this.head = novo
      this.tail = this.head
    } else {
      atual = this.head
      novo.proximo = this.head
      atual.anterior = novo
      this.head = novo
    }
    this.count++
    return elemento
  }

  insertLast(elemento) {
    let novo = new no(elemento)
    let atual
    let anterior
    this.tail = novo
    if (this.count === 0) {
      this.head = novo
    } else {
      atual = this.head
      while (atual.proximo) {
        atual = atual.proximo
      }
      atual.proximo = this.tail
      anterior = this.tail
      anterior.anterior = atual
    }
    this.count++
    return elemento
  }

  searchAt(posicao) {
    let atual = this.head
    for (let i = 0; i < posicao; i++) {
      atual = atual.proximo
    }
    return atual
  }

  insertAt(elemento, posicao) {
    let novo = new no(elemento)
    if (posicao == 0) {
      this.insertFirst(elemento)
    } else {
      let anterior = this.searchAt(posicao - 1)
      let atual = anterior.proximo
      novo.proximo = atual
      anterior.proximo = novo
      novo.anterior = anterior
    }
    this.count++
    return elemento
  }

  traversal() {
    if (!this.head) {
      return undefined
    } else {
      let arr = []
      let atual = this.head
      while (atual) {
        arr.push([atual.anterior, atual.elemento, atual.proximo])
        atual = atual.proximo
      }
      return arr
    }
  }

  deleteAt(posicao) {
    if (posicao < this.count) {
      let atual = this.head
      let anterior = atual
      if (posicao == 0) {
        this.head = atual.proximo
      } else {
        for (let i = 0; i < posicao; i++) {
          anterior = atual
          atual = atual.proximo
        }
        anterior.proximo = atual.proximo
      }
      this.count--
      return posicao
    } else {
      return undefined
    }
  }
}

const trem = new listaDupla()
console.log(trem.insertFirst('Vagão 2'))
console.log(trem.insertFirst('Vagão 1'))
console.log(trem.insertLast('Vagão 3'))
console.log(trem.insertFirst('Locomotiva'))
console.log(trem.insertAt('Vagao 4', 4))
console.log(trem.deleteAt(0))
console.log(trem.deleteAt(0))
console.log(trem.deleteAt(3))
console.table(trem.traversal())
