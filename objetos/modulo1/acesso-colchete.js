const cliente = {
    nome: 'André',
    idade: 32,
    cpf: '46546546565',
    email: 'andre@gmail.com',
}
console.log(cliente['nome']) // usando colchetes para ver itens objetos
const chaves = ['nome', 'idade', 'cpf', 'email']
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
})