const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '15478632584',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`O nome de estudante é ${estudante.nome}`)
console.log(`Os 3 primeiros numeros do CPF são ${estudante.cpf.substring(0, 3)}`);