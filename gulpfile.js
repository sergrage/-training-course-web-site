var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Horray!");
});

gulp.task('html', function(){
    console.log("Horray!123123123");
});

gulp.task('watch', function(){
    
    watch('index.html', function(){
        gulp.start('html');
    });
});