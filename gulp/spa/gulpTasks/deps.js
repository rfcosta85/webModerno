const gulp = require('gulp')
const uglyfycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS() {

    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglyfycss({ "uglyComments": false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function depsFonts() {

    return gulp.src('node_modules/font-awesome/fonts/*.*') // vai pegar todas as fontes que estão dentro dessa página
        .pipe(gulp.dest('build/assets/fonts')) // vai jogar para a pasta de destino
}

module.exports = { 
    depsCSS,
    depsFonts
}