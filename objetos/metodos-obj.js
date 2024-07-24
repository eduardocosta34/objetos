const carro = {
    marca: 'Nissan',
    modelo: 'March',
    ano: 2014,
    cor: 'preto',

    ligado: false,

    placa: 'ADE4354',

    // ligar: function(){
    //     if(!this.ligado){
    //         console.log('O carro está ligado')
    //     }else{
    //         console.log('o carro já está ligado')
    //     }
    // },

    // desligar: function(){
    //     if(this.ligado){
    //         console.log('O carro está desligado')
    //     }else{
    //         console.log('O carro já está desligado')
    //     }
    // },

    // obterDetalhes: function (){
    //     const estado = this.ligado ? 'ligado' : 'desligado'
    //     return `Detalhes do carro: \nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`
    // }

}

// carro.ligar()
// carro.desligar()
// carro.desligar()
// carro.ligar()
// console.log(carro.obterDetalhes())

//definir a propriedade placa como não enumerável
Object.defineProperty(carro, 'placa', {enumerable: false})

//utilizando um loop for...in para percorrer as propriedades enumeráveis do objeto carro
console.log('Propriedades enumeráveis do carro: ')
for(let propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`)
}

//Utilizando Object.keys() para obter um array com as chaves enumeráveis do objeto carro
const chavesEnumeraveis = Object.keys(carro)
console.log('\nChaves enumeráveis do carro: ')
console.log(chavesEnumeraveis)

console.log('Acesso direto a propriedade placa: ')
console.log(carro.placa)