var gulp = require('gulp'),
uglify = require('gulp-uglify');


// SCRIPTS
gulp.task('scripts', function(){
  console.log('scripts task ok');

  return gulp.src('app/assets/scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/scripts'));
});