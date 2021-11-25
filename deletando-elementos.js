// deletando elementos no array
// notas 10, 6, 8, 5.5 e 10

const notas = [10, 6, 8, 5.5, 10]
notas.pop()

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(`A média é ${media}`)