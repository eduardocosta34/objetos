const calculadora = {
    soma: function(a, b){
        return a + b
    },

    subtracao: function(a, b){
        return a - b
    },

    multiplicacao: function (a, b){
        return a * b
    },

    diviao: function (a, b){
        if(b!== 0){
            return a / b
        } else{
            return 'Divisão por zero não é permitida'
        }
    },
    calcularMedia: function(numeros){
        const soma = numeros.reduce((total, numero) => total + numero, 0)
        return soma / numeros.length
    }
}

console.log('Soma: ' + calculadora.soma(5, 3))
console.log('Subtrção: ' + calculadora.subtracao(8, 4))
console.log('Multiplicação: ' + calculadora.multiplicacao(6, 2))
console.log('Divisão por zero: ' + calculadora.diviao(8, 0))

const numerosParaMedia = [10, 50, 45, 20, 30]
console.log('Média: ' + calculadora.calcularMedia(numerosParaMedia));