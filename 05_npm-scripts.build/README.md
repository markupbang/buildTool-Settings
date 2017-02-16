###### npm scripts

## 개발작업에서 사용되는 build와 배포에 사용되는 build를 구분한다.

# 1.devbuild(개발용) :
#### npm start
npm run devbuild

##### npm script
```sh
"devbuild": "npm run lint:sass && npm run lint:js && npm run watch:file"
```

### sass-lint
- sass파일의 실수를 찾아주는 코드 검사기: node-sass의 기본 lint를 사용해도 무방함

#### npm script
```sh
"lint:sass": "sass-lint -c .sass-lint.yml 'src/sass/utils/, src/sass/gtris.scss' -v -q"
```
![sass-lint](https://www.npmjs.com/package/sass-lint)

#### jshint
- 자바스크립트 코드 검사도구
![jshint](https://www.npmjs.com/package/jshint)
![jshint options](https://blog.outsider.ne.kr/1007)

##### npm script
```sh
"lint:js": "jshint --verbose src/js/util/ src/js/components"
```

#### nodemon
- 소스 수정시 자동으로 서버를 재시작 해주는 도구
![nodemon](https://nodemon.io/)

##### npm script
```sh
"watch:file": "nodemon -e scss,js --watch src -x \"npm run build:css && npm run build:js\""
```

#### node-sass
![node-sass](https://github.com/sass/node-sass)

##### npm script
```sh
"build:css": "node-sass --output-style compact --indent-type tab --indent-width 1 --source-map dist/map/ -o src/sass/utils/ src/sass/gtris.scss dist/gtris.css"
```

#### browserify
- js bundler
![browserify](http://browserify.org/)

##### npm script
```sh
"build:js": "browserify src/js/entry.js > dist/bundle.js"
```

# 2.build(배포용)
#### npm start
npm run build

##### npm script
```sh
"build": "npm run build:css && uglifyjs src/js/util/*.js src/js/components/*.js -o dist/bundle.min.js --source-map dist/map/bundle.min.js.map -p 5 -c -m"
```

### uglifyjs
- js파일 압축

#### npm script
```sh
uglifyjs src/js/util/*.js src/js/components/*.js -o dist/bundle.min.js --source-map dist/map/bundle.min.js.map -p 5 -c -m
```
![uglifyjs](http://lisperator.net/uglifyjs/)
