###### Gulp setting
## gulp-sass-lint

# 1. sass, sass watch
### gulp + gulp-sass
- 'gulp-sass-lint'를 사용해 sass파일의 실수를 찾아주는 코드 검사기

#### npm install
```sh
npm install gulp-sass-lint --save-dev
```

#### gulpfile.js
##### 플러그인 호출, 경로 저장
```js
var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');
```

##### task 작성
```js
gulp.task('default', function () {
    return gulp.src('sass/**/*.s+(a|c)ss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});
```
! Node.js(src/images/sass-lint-img.png)
> 결론은 gul-sass-lint 플러그인을 따로 쓰는것보다 gulp-sass의 error message가 훨씬 좋음
