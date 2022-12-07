const alunos = ['gabriel', 'agatha', 'vanderleia', 'paizao']
const notas = [10, 9, 8, 7]
const alunosENotas = [alunos, notas]
console.log(alunosENotas)
// puxando em lista arrays da arrays
console.log(`O aluno ${alunosENotas[0][3]} tirou nota ${alunosENotas[1][3]} na prova`)

// matrizes em arrays
const funcionarios = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
];
console.log(`${funcionarios[0][1]} tem ${funcionarios[1][2]} anos`)