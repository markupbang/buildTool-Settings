###### Gulp setting

# 1. gulp js building
### gulp + gulp-concat + gulp-uglify
> gulp-concat: js 파일 병합을 위한 플러그인  
> gulp-uglify: js 파일 압축을 위한 플러그인  

#### npm install
```sh
npm install gulp gulp-concat gulp-uglify --save-dev
```

#### gulpfile.js
##### 플러그인 호출, 경로 저장
```js
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

// paths
var DIR = {
    SRC: 'src',
    DEST: 'dist',
    MAP: 'map'
};
var SRC = {// input file
    JS: DIR.SRC + '/js/components/*.js',
    UTIL: DIR.SRC + '/js/util/*.js'
};
var dist = DIR.DEST; // output file
```

##### task 작성

```js
// task
gulp.task('js', function() {
    gulp.src([SRC.JS, SRC.UTIL])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js')) // 모든 파일을 bundle.js로 합침
    .pipe(uglify()) // 압축
    .pipe(sourcemaps.write(DIR.MAP)) // sourcemap file 생성
	.pipe(gulp.dest(dist));
});

// watch
gulp.task('watch', function () {
    gulp.watch(SRC.JS, ['js']);
});

gulp.task('default', ['js','watch']);
```
