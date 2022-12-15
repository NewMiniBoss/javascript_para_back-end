// require, conecta com json
const dados = require('./cliente.json')
console.log(dados)
console.log(typeof dados)

// transformar o objeto em string
const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString)
console.log(typeof clienteEmString)

// transformando a string em objeto
const clienteEmObjeto = JSON.parse(clienteEmString)
console.log(clienteEmObjeto)
console.log(typeof clienteEmObjeto)
