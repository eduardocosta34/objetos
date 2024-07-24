const estudantes = require("./estudantes.json")

function buscaInformacao (lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor))
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet')
console.log(estudanteEncontrado)


const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '31949463623')
console.log(telefoneEncontrado)

