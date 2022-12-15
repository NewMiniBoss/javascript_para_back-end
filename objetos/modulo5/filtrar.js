// linkando com json
const clientes = require('./cliente.json')

// filtar clientes de apartamento sem complemento
function filtrarApartamentosSemComplementos(clientes) {
    return clientes.filter((item) => {
        return (item.endereco.apartamento === true && !item.endereco.apartamento.hasOwnProperty('complemento'))
    })
} 
const filtrados = filtrarApartamentosSemComplementos(clientes)
console.log(filtrados)