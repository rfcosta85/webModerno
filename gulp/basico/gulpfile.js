const gulp = require('gulp')
const { series, parallel } = require('gulp') // O series faz uma tarefa em sequência, uma atrás da outra
// O series também pode ser importado da seguinte forma

//const series = gulp.series

const antes1 = cb => { 
    console.log('Tarefa Antes: 1!')
    return cb()
}

const antes2 = cb => { 
    console.log('Tarefa Antes: 2!')
    return cb()
}


function copiar(cb) { 
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // serve para selecionar quais arquivos vamos usar como insumo dentro desse workflow
    gulp.src('pastaA/**/*.txt') // Qualquer arquivo que estiver presente na pasta A será transferido para a pasta B
        .pipe(gulp.dest('pastaB'))
        //.pipe(imagePelaMetade())
        //.pipe(imageEmPretoEBranco())
        //.pipe(transformacaoA())
        //.pipe(transformacaoB())
        //.pipe(transformacaoC())
    return cb()
}

const fim = cb => { 
    console.log('Tarefa Fim!')
    return cb()
}


module.exports.default = series(
    parallel(antes1,antes2),  // O parallel fez a execução ser feita em paralelo.   
    copiar,
    fim,
)