'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var src = './src/sass/*.s+(a|c)ss'; // input file
var dist = './src/css'; // output file

gulp.task('sass', function () {
  return gulp.src(src)
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
    .pipe(gulp.dest(dist));
});

gulp.task('sass:watch', function () {
  gulp.watch(src, ['sass']);
});

gulp.task('default', [
	'sass',
	'sass:watch'
]);
