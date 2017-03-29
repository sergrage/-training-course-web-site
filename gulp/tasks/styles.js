var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');
// Задание styles - 2 потока, один пропускает через фильтры, второй 
// создает файл в app/temp/styles
// .on перехватывает ошибки css, что не приводит к окончанию задания watch.
gulp.task('styles', function() {
    return gulp.src('app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', function(errorInfo) {
        	console.log(errorInfo.toString());
        	this.emit('end');
        })
        .pipe(gulp.dest('app/temp/styles'));
});