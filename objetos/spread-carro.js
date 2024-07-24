const carro = {
    marca: 'Nissan',
    modelo: 'March',
    ano: 2014,
    cor: 'preto'
}

const carroNovo = {
    marca: 'honda',
    modelo: 'Civic',
    ano: 2023,
    cor: 'Azul'
}

const carroComNovosDetalhes = {...carro, ...carroNovo}

console.log(carroComNovosDetalhes)

carroComNovosDetalhes.modelo = 'Accord'

console.log(carroComNovosDetalhes)