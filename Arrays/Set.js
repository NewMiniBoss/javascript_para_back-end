const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]
// const meuSet = new Set(nomes)
// const nomesAtualizados = [...meuSet]
const nomesAtualizadosSimplificado = [...new Set(nomes)]
console.log(nomesAtualizadosSimplificado)