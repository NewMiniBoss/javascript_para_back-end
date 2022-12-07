const alunos = ['gabriel', 'agatha', 'vanderleia', 'paizao']
const notas = [10, 9, 8, 7]
const alunosENotas = [alunos, notas]
console.log(alunosENotas)
// puxando em lista arrays da arrays
console.log(`O aluno ${alunosENotas[0][3]} tirou nota ${alunosENotas[1][3]} na prova`)