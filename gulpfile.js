var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./src/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function () {
  return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'));
});


gulp.task('serve', function() {
  //2. serve at custom port
  //var server = gls.static('./', 3030);
  //server.start();

  browserSync.init({
      server: "./"
  });
  //use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(['./src/*.scss', './index.html',], ['sass']);
  gulp.watch(['./*.html', './src/images/***']).on('change', browserSync.reload);
});



gulp.task('default',['images','sass','serve'],function(){

});
