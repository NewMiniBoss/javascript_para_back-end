const notas = [10, 8, 6, 4]
const notasComUmPontoExtra = notas.map((nota) => {
    if (nota + 1 >= 10) {
        return 10
    } else {
        return nota + 1
    }
})
console.log(notasComUmPontoExtra)
