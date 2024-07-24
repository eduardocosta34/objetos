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
    }],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7))


