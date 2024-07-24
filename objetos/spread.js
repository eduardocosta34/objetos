const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '15478632584',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11-99997-5411', '22-94878-4562'],
    enderecos: [{
        rua: 'Rua das Maças',
        numero: '45',
        complemento: 'apto 101'
    },
    {
        rua: 'Rua das Amoras',
        numero: '20',
        complemento: ''
    }]
}

function exibirTelefones(telefone1, telefone2){
    console.log(`Ligar para ${telefone1}`)
    console.log(`Ligar para ${telefone2}`)
}

// exibirTelefones(estudante.telefones[0], estudante.telefones[1])
exibirTelefones(...estudante.telefones)

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio)