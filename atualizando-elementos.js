
// criar uma lista com os alunos joão, ana, caio, lara, marjorie e leo
// remover ana e caio e adicionar rodrigo


//UMA FORMA DE FAZER
  //const alunos = ['João', 'Lara', 'Marjorie', 'Leo', 'Ana', 'Caio']

  //alunos.pop()
  //alunos.pop()
  //alunos.push('Rodrigo')

  //console.log(alunos)


//OUTRA FORMA DE FAZER

const alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

alunos.splice(1,2, 'Rodrigo')
console.log(`Lista de chamada: ${alunos}`)

