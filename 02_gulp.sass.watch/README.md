###### Gulp setting
## sass watch sourcemaps browsersync

# 1. sass, sass watch
### gulp + gulp-sass
- 'gulp'와 'gulp-sass'를 사용해 sass파일 컴파일
- 'watch'를 통해 sass 파일을 실시간 감시하여 파일 변경 시 sass task를 실행

#### npm install
```sh
npm install gulp gulp-sass --save-dev
```

#### gulpfile.js
##### 플러그인 호출, 경로 저장
```js
var gulp = require('gulp');
var sass = require('gulp-sass');

var src = './src/sass/*.s+(a|c)ss'; // input file
var dist = './src/css'; // output file
```

##### task 작성
```js
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
```

# 2. Add sourcemaps
### gulp-sourcemaps
- 여러개의 sass파일이 하나의 css로 컴파일 됐을때 크롬 개발자 도구와 같은 것을 이용하여 디버깅할 시 scss의 위치를 알려주어 디버깅에 유용함

#### npm install
```sh
npm install gulp-sourcemaps --save-dev
```

##### 플러그인 호출, 경로 저장
```js
var sourcemaps = require('gulp-sourcemaps');
var maps = './'; // map file
```

##### task 작성
```js
gulp.task('sass', function () {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(sourcemaps.write(maps))
        .pipe(gulp.dest(dist));
});
```

# 3. Add [Browsersync](https://www.browsersync.io/docs/api) setting
### browser-sync
- Browsersync는 여러 브라우저에서 웹페이지의 테스트를 도와주는 도구로 브라우저를 동기화해주는 프로그램
- 지정한 경로안의 파일이 변경되면 열려있는 브라우저들을 새로고침

기존의 default에 등록된 task를 serve로 이동시키고 default에 serve를 등록

#### npm install
```sh
npm install -g browser-sync
```

##### 플러그인 호출
```js
var browserSync = require('browser-sync').create();
```

##### task 작성
```js
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
```
