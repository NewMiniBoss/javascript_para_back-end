// arrays
const notas = [10, 6.5, 8, 7.5];
// somando notas dentro do for
let somaDasNotas = 0;
// repetindo as somas do array ${notas}
for (i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}
// pegando a soma da variavei let ${somaDasNotas} e calculando a média
const media = somaDasNotas / notas.length;
// mostrando no node.js o resultado
console.log(`a soma das notas é ${media}`);