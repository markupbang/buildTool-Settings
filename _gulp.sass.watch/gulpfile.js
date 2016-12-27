'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var src = './src/sass/*.s+(a|c)ss'; // input file
var dist = './src/css'; // output file
var maps = './'; // map file

gulp.task('sass', function () {
  return gulp.src(src)
	.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
	.pipe(sourcemaps.write(maps))
    .pipe(gulp.dest(dist));
});

gulp.task('sass:watch', function () {
  gulp.watch(src, ['sass']);
});

gulp.task('default', [
	'sass',
	'sass:watch'
]);
