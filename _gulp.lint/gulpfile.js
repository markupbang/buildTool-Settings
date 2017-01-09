'use strict';

var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint'),
    sass = require('gulp-sass');

var src = './sass/**/*.s+(a|c)ss'; // input file
var dist = './src/css'; // output file

gulp.task('sass', function () {
  return gulp.src(src)
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
    .pipe(gulp.dest(dist));
});

gulp.task('sass:watch', function () {
    gulp.watch(src, ['sass']);
});

gulp.task('sass-lint', function () {
  return gulp.src(src)
    .pipe(sassLint({
      options: {
        formatter: 'stylish',
        'merge-default-rules': false
      },
      files: {ignore: '**/*.scss'},
      rules: {
        'no-ids': 1,
        'no-mergeable-selectors': 0
      },
      configFile: 'config/other/.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('default', [
    //'sass-lint',
    'sass',
    'sass:watch'
]);
