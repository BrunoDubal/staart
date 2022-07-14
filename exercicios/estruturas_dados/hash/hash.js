class hashTable {
  constructor() {
    this.table = new Array(127)
    this.size = 0
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % this.table.length
  }

  put(key, valor) {
    const index = this._hash(key)
    this.table[index] = [key, valor]
    this.size++
  }

  get(key) {
    const index = this._hash(key)
    return this.table[index]
  }

  delete(key) {
    const index = this._hash(key)
    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined
      this.size--
      return true
    } else return false
  }

  clear() {
    this.table = []
    this.size = 0
  }
}

const meusContatos = new hashTable()
meusContatos.put('Bruno', '222222222')
meusContatos.put('Julia', '111111111')
meusContatos.put('Maui', '333333333')

meusContatos.delete('Maui')

console.log(meusContatos.get('Julia'))

console.table(meusContatos.table)
