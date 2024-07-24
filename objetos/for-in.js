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

for(let chave in estudante){
    const tipo = typeof estudante[chave]
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }

}

