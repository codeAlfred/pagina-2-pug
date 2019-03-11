const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');


gulp.task('default',['css'], function(){
    browserSync.init({
       server: './app/' 
    });
    gulp.watch('./dev/sass/**/*.scss', ['css']);
    gulp.watch('./dev/**/*.pug', ['html']);
    gulp.watch('./app/*.html').on('change',browserSync.reload);
    
    
});

gulp.task('css', function(){
   gulp.src('./dev/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css/'))
    .pipe(browserSync.stream());
});

gulp.task('html', function(){
    gulp.src('./dev/pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./app/'));
});
