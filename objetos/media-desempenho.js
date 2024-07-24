const pessoa = {
    nome: 'Maria Clara',
    notas: [10, 10, 9, 8.3],

    calcularMediaNotas: function(){
        const somaDasNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaDasNotas / this.notas.length;
        return media.toFixed(2);
    },

    classificarDesempenho: function(){
        const media = this.calcularMediaNotas();

        if (media >= 9){
            return 'desempenho exelente';
        }else if (media >= 7.5 && media < 9){
            return 'bom desempenho';
        }else if (media >= 6 && media < 7.5){
            return 'desempenho regular'
        }else{
            return 'desempenho insuficiente'
        }
    }
}

const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}`)

const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui um ${categoriaDesempenho}`)
