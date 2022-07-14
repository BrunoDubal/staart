const redes = ['Facebook', 'Instagram', 'WhatsApp', 'TikTok', 'Tinder']

//descobrir o indice de um valor
const TikTok = redes.indexOf('TikTok')
console.log(TikTok)

//mostra se o value indicado pertence a este array
console.log(redes.includes('Facebook'))

//percorrendo o array atraves do indice
for (let i = 0; i < redes.length; i++) {
  console.log(redes[i])
}

for (const i in redes) {
  console.log(`${i}: ${redes[i]}`)
}

//percorrendo o array atraves dos valores
for (const valor of redes) {
  console.log(valor)
}

//percorrendo o array de forma completa
redes.forEach((valor, indice) => {
  console.log(valor)
  console.log(indice)
})
