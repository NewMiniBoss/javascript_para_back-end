const cliente = {
    nome: 'joao',
    saldo: 200,

    efetuarPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log('saldo insuficiente')
        } else {
            this.saldo -= valor
            console.log(`pagamento efetuado, seu saldo é ${this.saldo}`)
        }
    }
}
cliente.efetuarPagamento(150)