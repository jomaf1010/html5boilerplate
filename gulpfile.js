var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var g = require('gulp-load-plugins')({lazy:false});
var watch = require('gulp-watch');
var include = require('gulp-include');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');

g.run = require('run-sequence');




gulp.task('devmode',function(){
    g.run('clean','sass','script','watch');
});

gulp.task('watch',function() {
    gulp.watch('./assets/scss/*.scss',['sass']);
    gulp.watch('./assets/*/**.js',['script']);
});




gulp.task('clean',function(){
   gulp.src('./public/*')
       .pipe(clean());
});

gulp.task('sass',function(){
    gulp.src('./assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});
gulp.task('script',function(){
    gulp.src('./assets/js/**.js')
        .pipe(include())
        //.pipe(uglify())
        .pipe(gulp.dest('./public'));
});