// const pessoa = {
//     nome: 'João Felipe',
//     idade: 20,
//     solteiro: false,
//     hobbies: ['carros', 'motos', 'escalada'],
//     endereco: {
//         rua: 'Rua das Mandiocas',
//         cidade: 'Frutal',
//         estado: 'MG'
//     }
// }

// function mostrarInfoPessoa(pessoa){
//     console.log('Informações da pessoa: ')
//     console.log(`Nome: ${pessoa.nome}`)
//     console.log(`Idade: ${pessoa.idade}`);
//     console.log(`Solteiro: ${pessoa.solteiro}`)
//     console.log(`Hobbies: ${pessoa.hobbies}`);
//     console.log(`Endereço: 
//         rua: ${pessoa.endereco.rua}
//         cidade: ${pessoa.endereco.cidade}
//         estado: ${pessoa.endereco.estado}`);
// }

// mostrarInfoPessoa(pessoa)


const pessoas = [
    {
        nome: 'Maria celina',
        idade: '65',
        cidade: 'São Paulo - SP'
    },
    {
        nome: 'João Machado',
        idade: '45',
        cidade: 'Belo Horizonte - MG'
    },
    {
        nome: 'Romario Candido',
        idade: '51',
        cidade: 'Curitiba - PR'
    },
    {
        nome: 'Aline Mendonça',
        idade: '28',
        cidade: 'Rio de Janeiro - RJ'
    }
]


pessoas.push({
    nome: 'Rodrigo Peixoto',
    idade: '24',
    cidade: 'Salvador - BA'
})


function mostrarListaPessoa(pessoas){
    console.log('Lista de Pessoas: ')
    x = 1
    pessoas.forEach(pessoa => {
        console.log(x, `Nome: ${pessoa.nome}, idade: ${pessoa.idade}, cidade: ${pessoa.cidade}`)
        x++
    });
}

function filtrarPorCidade(pessoas, cidade){
    return pessoas.filter(pessoa => pessoa.cidade === cidade)
}

mostrarListaPessoa(pessoas)

const pessoaSalvador = filtrarPorCidade(pessoas, "Salvador - BA")

console.log('Pessoa que mora em Salvador: ', pessoaSalvador)

