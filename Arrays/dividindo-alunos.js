const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']
// slice faz uma divisão dos grupos
const salaUm = alunos.slice(0, alunos.length / 2)
const salaDois = alunos.slice(alunos.length / 2)
console.log(salaUm, salaDois)