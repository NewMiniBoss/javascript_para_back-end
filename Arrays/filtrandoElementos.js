const escola = [
    ['gabriel ', 'vanderleia ', 'agatha ', 'moreno '], //alunos
    [8, 9, 5, 3] // notas
]
let aprovados = ''
let reprovados = ''
const aprovador = escola[1].filter((aluno, indice) => {
    if (aluno > 5) {
        aprovados += escola[0][indice]
        return true
    } else {
        reprovados += escola[0][indice]
        return false
    }
})
console.log(`Os aprovados são ${aprovados}e os reprovados são ${reprovados}`)