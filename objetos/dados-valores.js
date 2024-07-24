const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '15478632584',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11-99997-5411', '22-94878-4562']
}

console.log(estudante.telefones[1]);

estudante.endereco = {
    rua: 'Rua das Maças',
    numero: '45',
    complemento: 'apto 101'
}

console.log(estudante.endereco.rua)

console.log(estudante);