// array em matrizes
const escola = [
    ['joao', 'juliana', 'ana', 'caio'], // alunos
    [10, 8, 6, 4] // notas
]
// função
function alunosENotas(aluno) {
    // const alunos = escola[0]
    // const notas = escola[1]
    const [alunos, notas] = escola // mesma coisa que em cima
    if (alunos.includes(aluno)) {
        const indice = alunos.indexOf(aluno)
        const nota = notas[indice]
        console.log(`${aluno} está cadastrado e sua nota é ${nota}`)
    } else {
        console.log(`aluno não encontrado`)
    }
}
// chamando função
alunosENotas('juliana')