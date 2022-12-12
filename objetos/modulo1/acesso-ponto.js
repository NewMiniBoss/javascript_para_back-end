const cliente = {
    nome: 'André',
    idade: 32,
    cpf: '46546546565',
    email: 'andre@gmail.com',
}
console.log(`O cliente é o ${cliente.nome}, ele tem ${cliente.idade} anos e seus primeiros dígitos do CPF é ${cliente.cpf.substring(0, 3)}`)
