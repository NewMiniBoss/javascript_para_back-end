const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0
for (elemento of notas) {
    somaDasNotas += elemento;
}
const media = somaDasNotas / notas.length
console.log(`a media é ${media}`)