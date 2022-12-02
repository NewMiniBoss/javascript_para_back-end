// function com parametros
function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(10, 10))

// function com parametos e stringTemplate
function nomeIdade(nome, idade) {
    return `Eu me chamo ${nome} e tenho ${idade}`
}
console.log(nomeIdade('Gabriel', '22 anos'))

// function da fucntion
function multiplica(numbOne, numbTwo) {
    return numbOne * numbTwo
}
console.log(multiplica(soma(5, 5), soma(2, 2)))