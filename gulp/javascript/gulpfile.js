const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) { 
    return gulp.src('src/**/*.js') // p ser chamado vários arquivos
        .pipe(babel({
            comments: false, //N quero os arquivos comentários sendo transferido para o arquivo final
            presets: ["env"] //Pegarmos a versão mais nova do JS
        }))
        .pipe(uglify()) // Ele irá minificar o código inteiro
        .on('error', err => console.log(err)) // quando acontecer um erro ele fará irá executar a função, isso é possível graças ao atributo on
        .pipe(concat('codigo.min.js')) // Pegar todos os arquivos compilados pelo babel e também o código comprimido em linha so pelo uglify, esse resultado será concatenado e o parâmetro vai dizer qual arquivo será gerado no final
        .pipe(gulp.dest('build')) // define qual será o destino do arquivo. Aqui definimos a pasta build    
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim) // para acessarmos a nossa função 