const carro = {
    marca: 'Nissan',
    modelo: 'March',
    ano: 2014,
    cor: 'preto'
}

console.log("Propriedades iniciais do carro: ")
for (let propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`)
}

carro.cambio = 'Manual';
carro.kmRodados = 5000;

console.log('\nPropriedades atualizadas do carro: ')
for (let propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`)
}