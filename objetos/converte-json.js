const estudante = require('./estudante.json');

const strinEstudante = JSON.stringify(estudante)

//console.log(strinEstudante)

console.log(estudante.nome)

const objEstudante = JSON.parse(strinEstudante)


console.log(objEstudante.email)

console.log(typeof objEstudante)

