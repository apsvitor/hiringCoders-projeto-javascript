const livros = require('./database')
const readline = require('readline-sync') // acessar a biblioteca readsync

const entradaInicial = readline.question('Deseja buscar um livro? (S/N) ')

if  ((entradaInicial.toLocaleUpperCase()) === 'S') {
    console.log("Essas são as categorias disponíveis:")
    //console.log('Produtividade', '/ Matemática', '/ Fantasia', '/ Língua Portuguesa', '/ Golpes')
    let i = 1

    const categorias = livros.map(livro => {
            return livro.categoria;
    })
    const categoriasSemRepeticao = categorias.filter((value, index) => {
        return categorias.indexOf(value) === index;
    })
    
    categoriasSemRepeticao.map(cat => console.log(`${i++} -> ${cat}`))

    const entradaCategoria = readline.question('Qual categoria você escolhe? ')
    
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)
}

else{
    console.log('Todos os livros disponíveis:')
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.table(livrosOrdenados)
}