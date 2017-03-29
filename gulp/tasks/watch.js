var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

// Задание watch - наблюдает за изменениями
gulp.task('watch', function(){
    // Инициализация сервера с указанием паки с сайтом
    browserSync.init({
       notify: false, 
       server: {
           baseDir: "app"
       } 
    });
    
    // Перезагрузка браузера при изменении index.html
    watch('app/index.html', function(){
        browserSync.reload();
    });

    // Начинает задание cssInject при изменении css файлов
    watch('app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
    
});

// Задание cssInject сначала выполнит задание styles, а потом обновит браузер.
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('app/assets/styles/styles.css')
            .pipe(browserSync.stream());
});