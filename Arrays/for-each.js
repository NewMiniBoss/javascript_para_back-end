// arrays
const notas = [10, 8, 6, 4]
// somando valores do array
let somaDasNotas = 0
// metodo forEach
notas.forEach(function(nota, indice){
    console.log(`mostrando os valores do forEach em sua repetição ${nota}`)
    console.log(indice)
    somaDasNotas += nota
})
console.log(`aqui é a soma total ${somaDasNotas}`)
const media = somaDasNotas / notas.length
console.log(`sua média é ${media}`)