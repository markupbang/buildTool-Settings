'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var src = './src/sass/*.s+(a|c)ss'; // input file
var dist = './src/css'; // output file
var maps = './'; // map file

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch(src, ['sass']);
    gulp.watch(dist).on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src(src)
	.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
	.pipe(sourcemaps.write(maps))
    .pipe(gulp.dest(dist))
    .pipe(browserSync.stream());
});

gulp.task('default', [
	'serve'
]);
