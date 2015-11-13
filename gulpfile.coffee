gulp = require('gulp')
$    = require('gulp-load-plugins')()

gulp.task('bower', ->
  $.bower().pipe(gulp.dest('./bower_components'))
)

gulp.task('compile', ['compile-js', 'compile-css'])

gulp.task('compile-js', ->
  gulp
  .src('src/js/**/*.+(js|jsx)')
  .pipe($.babel())
  .pipe(gulp.dest('app'))
)

gulp.task('compile-css', ->
  gulp
  .src('src/css/**/*.css')
  .pipe($.postcss([]))
  .pipe($.concat('app.css'))
  .pipe(gulp.dest('app'))
)
