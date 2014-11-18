var gulp = require('gulp')
var jade = require('gulp-jade')
var less = require('gulp-less')

gulp.task('less', function(){
  gulp.src('src/yellow.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))
  gulp.src('demo/Nebula.less')
    .pipe(less())
    .pipe(gulp.dest('demo'))
})

gulp.task('js', function(){
  gulp.src('src/yellow.js')
    .pipe(gulp.dest('dist'))
  gulp.src('bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('dist'))
})

gulp.task('jade', function(){
  gulp.src('demo/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('demo'))
})

gulp.task('default', ['less', 'js', 'jade'])
