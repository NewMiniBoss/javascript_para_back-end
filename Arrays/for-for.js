// conjuto das notas de uma escola
const notas = [
    [10, 6.5, 8, 7.5], // sala 1
    [9, 6, 6], //sala 2
    [8.5, 9.5] // sala 3
];
let somaDasNotas = 0;
let media = 0;
for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        somaDasNotas += notas[i][j];
        media = somaDasNotas / notas[i][j].length;
    };
};
console.log(media)