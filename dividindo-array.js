// Dividir a lista de alunos em duas salas com a mesma quantidade de alunos




const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André',
 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = alunos.slice(0, alunos.length/2)
const sala2 = alunos.slice(alunos.length/2)

console.log(`Alunos da sala1: ${sala1}`)
console.log(`Alunos da sala2: ${sala2}`)