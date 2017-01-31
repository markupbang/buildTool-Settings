'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// paths
var DIR = {
    SRC: 'src',
    DEST: 'dist',
    MAP: 'map'
};
var SRC = {// input file
    JS: DIR.SRC + '/js/components/*.js',
    UTIL: DIR.SRC + '/js/util/*.js',
    SCSS: DIR.SRC + '/sass/*.s+(a|c)ss'
};
var dist = DIR.DEST; // output file

// task
gulp.task('lint', function() {
    gulp.src(SRC.JS)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('sass', function () {
  return gulp.src(SRC.SCSS)
	.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
	.pipe(sourcemaps.write(DIR.MAP))
    .pipe(gulp.dest(DIR.DEST));
});

gulp.task('js', function() {
    gulp.src([SRC.JS, SRC.UTIL])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
	.pipe(gulp.dest(DIR.DEST));
});

// watch
gulp.task('watch', function () {
    gulp.watch(SRC.SCSS, ['sass']);
    gulp.watch(SRC.JS, ['js','lint']);
});

gulp.task('default', ['sass','js','lint','watch']);
