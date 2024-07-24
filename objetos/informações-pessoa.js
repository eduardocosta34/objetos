const pessoaOriginal = {
    id: 1,
    nome: "Alice Maria",
    idade: 30
}

//função para copiar objetos JSON
function copiarObjetoJson(objeto){
    return JSON.parse(JSON.stringify(objeto))
}

const pessoaModificada = copiarObjetoJson(pessoaOriginal)

pessoaModificada.idade = 31


console.log('Pessoa Original: ', pessoaOriginal)
console.log('Pessoa modificada: ', pessoaModificada)