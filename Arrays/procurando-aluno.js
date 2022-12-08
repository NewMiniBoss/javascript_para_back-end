// array em matrizes
const escola = [
    ['joao', 'juliana', 'ana', 'caio'], // alunos
    [10, 8, 6, 4] // notas
]
// função
function alunosENotas(aluno) {
    if (escola[0].includes(aluno)) {
        const indice = escola[0].indexOf(aluno)
        const nota = escola[1][indice]
        console.log(`${aluno} está cadastrado e sua nota é ${nota}`)
    } else {
        console.log(`aluno não encontrado`)
    }
}
// chamando função
alunosENotas('gabriel')