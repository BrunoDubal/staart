class no {
  constructor(elemento) {
    this.elemento = elemento
    this.proximo = undefined
  }
}

class listaEncadeada {
  constructor() {
    this.head = undefined
  }

  insertFirst(elemento) {
    const novo = new no(elemento)
    let atual

    if (!this.head) {
      this.head = novo
    } else {
      atual = this.head
      novo.proximo = atual
      this.head = novo
    }
    return elemento
  }

  insertLast(elemento) {
    const novo = new no(elemento)
    let atual

    if (!this.head) {
      this.head = novo
    } else {
      atual = this.head
      while (atual.proximo) {
        atual = atual.proximo
      }
      atual.proximo = novo
    }
    return elemento
  }

  searchAt(posicao) {
    let atual = this.head
    for (let i = 0; i < posicao && atual; i++) {
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
    }
    return elemento
  }

  traversal() {
    if (!this.head) {
      return undefined
    } else {
      let elementosLista = []
      let atual = this.head
      while (atual) {
        elementosLista.push(atual.elemento)
        atual = atual.proximo
      }
      return elementosLista
    }
  }

  deleteAt(posicao) {
    let atual = this.head
    if (posicao == 0) {
      atual.head = atual.proximo
    } else {
      let anterior = atual
      for (let i = 0; i < posicao; i++) {
        anterior = atual
        atual = atual.proximo
      }
      anterior.proximo = atual.proximo
    }
    return posicao
  }

  indexOf(elemento) {
    let atual = this.head
    let contador = 0
    while (atual) {
      if (atual.elemento == elemento) {
        return contador
        break
      } else {
        contador++
        atual = atual.proximo
      }
    }
    return undefined
  }
}

const trem = new listaEncadeada()
console.log(trem.insertFirst('Locomotiva'))
console.log(trem.insertLast('Vagão 1'))
console.log(trem.insertLast('Vagão 2'))
console.log(trem.insertAt('Locomotiva2', 1))
console.log(trem.insertAt('Vagão 0', 2))
console.log(trem.deleteAt(1))
console.table(trem.traversal())
console.log(trem.indexOf('Vagão 0'))
