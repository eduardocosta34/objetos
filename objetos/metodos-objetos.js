const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '15478632584',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11-99997-5411', '22-94878-4562'],
    // enderecos: [{
    //     rua: 'Rua das Maças',
    //     numero: '45',
    //     complemento: 'apto 101'
    // },
    // {
    //     rua: 'Rua das Amoras',
    //     numero: '20',
    //     complemento: ''
    // }]
}

const chaveObjeto = Object.keys(estudante)
console.log(chaveObjeto); 

if (!chaveObjeto.includes('enderecos')) {
    console.error('é necessario ter um endereço cadastrado')
}