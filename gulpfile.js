var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');

gulp.task('devServer', function() {
  connect.server({livereload: true});
});

gulp.task('buildServer', function() {
  connect.server({root: './build'});
});

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
      .pipe(sass({
        outputStyle: 'compressed',
        includePaths: [
          './bower_components/bootstrap-sass-official/assets/stylesheets'
        ]
      }))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('usemin', ['sass'], function () {
  return gulp.src('./index.html')
    .pipe(usemin({
      css: [rev()],
      js: [uglify(), rev()],
      html: [minifyHtml({empty: true})]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['sass']);

  gulp.watch('./build/css/*.css', function () {
    gulp.src('./build/css/*.css')
    .pipe(connect.reload());
  });

  gulp.watch('./index.html', function () {
    gulp.src('./index.html')
    .pipe(connect.reload());
  });
});

gulp.task('build', ['usemin', 'sass']);
gulp.task('default', ['devServer', 'watch']);
