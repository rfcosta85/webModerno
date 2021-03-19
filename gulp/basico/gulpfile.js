const gulp = require('gulp')
//const { series } = require('gulp') // O series faz uma tarefa em sequência, uma atrás da outra
// O series também pode ser importado da seguinte forma

const series = gulp.series

function copiar(cb) { 
    console.log('Tarefa de copiar!')
    return cb()
}

module.exports.default = series(copiar)