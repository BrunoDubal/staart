const saldoContas = [10, 20, 50, 200, 192];

const total = saldoContas.reduce((acumulador, valor) => acumulador + valor)

console.log(total);