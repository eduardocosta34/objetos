const contaBancaria = {
    titular: 'Roberto Dinamite',
    saldo: 1520.55,
    depositar: function(valor){
        this.saldo += valor
    },
    sacar: function(valor){
        if(valor <= this.saldo){
            this.saldo -= valor
        } else{
            console.log('Saldo Insuficiente para saque.')
        }
    }
}

const cliente = {
    nome: 'Carlos Antônio',
    conta: contaBancaria
}

function mostrarSaldo(cliente){
    console.log(`Nome do cliente: ${cliente.nome}`)
    console.log(`Saldo da conta: ${cliente.conta.saldo}`)
}

cliente.conta.depositar(500)
cliente.conta.sacar(10000)

mostrarSaldo(cliente)
