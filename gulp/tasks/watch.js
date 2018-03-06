var gulp = require('gulp'),
watch = require('gulp-watch'),
browsersync = require('browser-sync').create();

// watch
gulp.task('watch', function(){
  console.log('watch task ok');

  // browsersync
  browsersync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    gulp.start('default');
    browsersync.reload();
  });

  watch('./app/assets/css/**/*.css', function(){
    gulp.start('cssInject');
  });

  // watch('./app/assets/scripts/**/*.js', function(){
  //   gulp.start('scripts');
  // })
});

gulp.task('cssInject',['styles'], function(){
  return gulp.src('./app/dist/css/style.css')
    .pipe(browsersync.stream());
});