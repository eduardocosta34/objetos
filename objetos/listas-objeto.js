const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '15478632584',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11-99997-5411', '22-94878-4562'],
    endereco: [{
        rua: 'Rua das Maças',
        numero: '45',
        complemento: 'apto 101'
    }]
}

estudante.endereco.push({
    rua: 'Rua das Amoras',
    numero: '20',
    complemento: ''
})

//console.log(estudante.endereco);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComComplemento);