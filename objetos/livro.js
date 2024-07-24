const livro = {
    titulo: 'A arte da guerra',
    autor: 'Sun Tzu',
    anoPublicacao: 2015,
    genero: 'ficção',
    avaliacao: 1
}

console.log(livro);

const anoAtual = new Date().getFullYear()
livro.idadeLivro = anoAtual - livro.anoPublicacao //adicionando uma idade ao objeto livro



// console.log(
//     livro['genero'],
//     livro['autor']
// );


const novaAvaliacao = 4

console.log(livro['avaliacao']);

if (livro.avaliacao === null){
    livro.avaliacao = novaAvaliacao
}else{
    console.log('Este livro já possui uma avaliação')
}

livro.genero = 'drama'

delete livro.avaliacao

console.log(livro)