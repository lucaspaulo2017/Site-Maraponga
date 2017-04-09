var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');

// task para o sass
gulp.task('sass', function() {
    return gulp.src('sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

// task para watch
gulp.task('watch', function(){
	gulp.watch('sass/*.sass', ['sass']);
});

// task para imagens
gulp.task('imagem', function() {
gulp.src('imagens')
    .pipe(imagemin())
    .pipe(gulp.dest('imagens'));
});

// task default gulp
gulp.task('default', ['sass', 'watch']);