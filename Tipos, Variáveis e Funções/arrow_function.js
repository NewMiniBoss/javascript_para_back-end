// function normal
function apresentar(nome) { return `meu nome é ${nome}` }
console.log(apresentar('Gabriel'))
// function arrow
const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2
// function arrow (+1 de linha)
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num > 10) {
        return 'somente números de 1 a 9'
    } else {
        return num1 + num2
    }
}