```sh
{
      // ^(XOR), | 같은 bit연산자를 금지한다.
      // Javascript에서 비트 연산자가 필요한 것은 드물다.
      "bitwise"      : true,
      // 변수를 카멜케이스 표기법(혹은 UPPER_CASE)으로 강제한다.
      // (예) camelCase, UPPER_CASE
      "camelcase"    : false,
      // if문이나 while문 등 중괄호({})를 생략해도 되는 곳에서 중괄호를 강제한다.
      "curly"        : true,
      // 비교문에서 ==나 !=대신 ===나 !==를 사용하도록 강제한다.
      "eqeqeq"       : true,
      // 구형브라우저를 위해서 es3 명세를 사용한 경우에 필요하다.
      // 구형 IE 등 레거시 환경 대책용.
      "es3"          : true,
      // for-in 루프를 사용할 때 반드시 필터링을 사용하도록 강제한다.
      // for (var key in obj)식의 루프에서 프로토타입 체인을 사용한 키를 다 순회하므로
      // 일반적으로 if (obj.hasOwnProperty(key)) {}같은 조건문을 두는데 이러한
      // 필터링이 없을 경우(꼭 hasOwnProperty여야 하는 건 아니다.) 오류가 나오도록 한다.
      // (루프문안에 다른 실행문이 없으면 무시한다.)

      // Array, Date, String 같은 네이티브 객체의 프로토타입을 덮어쓸 수 없도록 막는다.
      // Array.prototype.count = function() { };와 같이 사용하는 경우 오류 메시지가 나온다.
      "freeze"       : true,
      // var a = function() {}();와 같이 함수를 바로 실행하는 경우 함수를 괄호로 감싸도록 강제한다. 이는 가독성을 높이기 위함이다.
      "immed"        : true,
      // 들여쓰기 크기를 정하고 숫자로 지정한다.
      "indent"       : 2,
      // 변수를 정의하기 전에 사용하는 것을 금한다.
      // 자바스크립트는 hoisting 때문에 같은 스코프에서 나중에 선언된 변수를 앞에서 사용할 수 있는데 이 부분을 차단한다는 의미이다.
      "latedef"      : true,
      // new로 생성자 함수를 사용할 때 대분자로 시작하도록 강제한다. new animal(); 대신 new Animal();와 같이 사용해야 한다.
      "newcap"       : true,
      // 최적화가 어려워 폐기될 예정인 arguments.caller와 arguments.callee의 사용을 막는다.
      "noarg"        : true,
      // for (var i=0;i < 10;i++) { }와 같이 for문 등에서 빈 블록을 금지한다.
      "noempty"      : true,
      // new Animal();같은 생성자함수의 실행결과를 다른 변수 등에 할당하지 않고는 사용할 수 없게 한다.
      "nonew"        : true,
      // ++, --같은 단항연산자를 금지한다.
      // 이러한 연산자가 코드 퀄리티를 낮출 것이라는 주장도 있기 때문에 (Python 문화권 등)
      "plusplus"     : false,
      // 문자열 등에 사용하는 따옴표의 스타일을 강제한다.
      // true, single, double 중 하나를 지정한다.
      // true로 지정하면 쌍따옴표, 홑따옴표를 모두 쓸 수 있지만
      // 섞어서 사용할 경우 오류가 나고 single은 홑따옴표
      // double는 쌍따옴표를 강제한다.
      "quotmark"     : true,
      // 라인 끝에 불필요한 공백문자가 들어가면 오류가 발생한다.
      // 여러 줄의 문자열이 있거나하면 사고가 일어나므로.
      "trailing"     : true,
      // var 선언되지 않은 변수를 사용하는 것을 금지한다.
      // 선언되지 않은 변수를 사용하면 오류가 발생한다.
      "undef"        : true,
      // 변수를 선언하고 사용하지 않으면 오류가 발생한다.
      // 또한 var 선언 한 변수는 경고, 함수의 인수로 사용하지 않는 것에 대해서는 경고 X.
      // 미사용 코드 청소에 편리.
      "unused"       : false,
      // 함수에 ECMAScript 5의 strict mode를 강제한다.
      // strict  mode는 표준이 아닌 JavaScript를 금지한다.
      // ※이 옵션은 strict  mode를 함수 범위에서만 강요. 전역으로 강제하지 않는다.
      // 전역으로 강제 해 버리면 타사의 것이 오류를 뱉을 수 있기 때문이다.
      // 만약 전역의 strict  mode를 강제하려면 globalstrict 옵션을 사용할 것.
      "strict"       : false,
      // 함수에 지정할 수있는 인수의 수를 제한한다.
      "maxparams"    : 5,
      // 블록의 중첩 수를 제한한다.
      "maxdepth"     : 5,
      // 1 개의 함수에 포함되는 문의 수를 제한한다.
      // "maxstatements": 10,
      // 순환 복잡도 (cyclomatic  complexity)를 제한한다.
      // 순환 복잡도라는 것은 코드의 복잡성 지표로 자세한 내용은 Wikipedia 참조.
      // "maxcomplexity": 10,
      // 1 행당 최대 문자 수를 제한한다.
      "maxlen"       : 90,

      /**
       * ----------------------------------------------------------------
       * Environments
       * JSHint에 원래 포함되어있는 전역 변수를 가르치기위한 옵션들.
       */

      // 최신 브라우저들의 document, navigator같은 전역 변수를 정의한다.
      // navigator이나 HTML 5 FileReader 객체 든가,
      // 모던 브라우저가 준비하고 있는 객체가 글로벌 선언되는 것이다.
      // 이 옵션은 console, alert은 노출하지 않는다.
      "browser"      : true,
      // console, alert 디버깅에 사용하는 오브젝트가 글로벌 선언되는 것이다.
      // 프로덕션에서는이 설정을 분리하는 것이 좋다.
      // console.log라고 써 있으면 구형 IE는 오류 발생.
      "devel"        : true,
      // jQuery의 전역변수를 정의한다.
      "jquery"       : true,
      // Node.js환경에 맞도록 브라우저 환경에만 어울리는 오류는 무시하고 Node.js에 맞는 전역변수를 정의한다.
      "node"         : true,
      // 표준으로 준비되어 있지 않지만 일반적으로 사용되는 전역 변수를 global로 선언하고있는 것으로 한다.
      // escape 라든지 unescape 든가.
      "nonstandard" : false,
      // 사용자 정의 글로벌 키워드 설정
      // "predef" :  [ "Backbone" ]

      /**
       * ----------------------------------------------------------------
       * Relaxing  options
       * true 를 설정 한 항목에 대해 JSHint가 경고를 내지 않도록 한다.
       */

      // 세미콜론 없이 경고를 내지 않도록 한다.
      "asi"          : false,
      // 조건식을 넣는 장소에서 변수들을 지정하고 경고를 내지 않도록 한다.
      "boss"         : false,
      // debugger 선언하고 경고를 내지 않도록 한다.
      "debug"        : true,
      // 비교 === 대신 ==를 사용하여 경고를 내지 않도록 한다.
      // == 의한 비교는 null, undefined의 체크가 편해서.
      "eqnull"       : false,
      // ECMAScript 6 문법을 사용을 허용한다.
      // 아직 확정 않고, 지원하지 않는 브라우저도 있으므로 각오하고 사용.
      "esnext"       : false,
      // eval을 사용하여 경고가 나오지 않게 한다.
      // JavaScript 인터프리터가 최적화하는 것이 어려울 때문에 추천하지 않음.
      "evil"         : false,
      // x || (x = 1); 표현식 허용
      "expr"         : true,
      // if, for 등 블록 내에서 선언 한 변수를 블록 밖으로 내보내도 경고를받지 않도록 한다.
      "funcscope"    : true,
      // ECMAScript 5의 strict mode를 전역으로 사용하는 것을 허용한다.
      // 전역에서 이것을 사용하면 타사 코드가 움직이지 않게되므로 추천하지 않음.
      "globalstrict" : false,
      // __iterator__ 속성을 사용하면 경고가 나오지 않도록 한다.
      // 이 속성이 지원되지 않는 브라우저가 있기 때문에 주의.
      "iterator"     : false,
      // 세미콜론 잊어 경고를받지 않도록 한다.
      // ※ 단 1 줄의 코드 블록의 마지막 문에 한한다.
      // var name = (function(){ return 'bangsh' }());
      // 이것은 매우 틈새 수요이지만, JavaScript 코드를 자동 생성하는 경우에 유용하다.
      "lastsemic"    : false,
      // 안전하지 않은 줄 바꿈이 있어도 경고가 나오지 않도록 한다.
      "laxbreak"     : false,
      // 쉼표를 맨 앞으로 가져 오는 코딩 스타일 방식을 허용한다.
      "laxcomma"     : false,
      // 루프에서 함수 정의 시, 오류를 발생하지 않게 한다.
      // 루프에서 함수 정의는 버그를 유발하기 쉽다.
      "loopfunc"     : false,
      // Mozilla의 JavaScript 확장을 이용해도 오류가 발생하지 않도록 한다.
      "moz"          : false,
      // 여러 줄의 문자열에 경고를 내지 않도록 한다.
      // 여러 줄의 문자열은 이스케이프 문자 \와 다음 줄의 시작 부분 사이에 공백이 들어가면 진짜 사고라 위험하다.
      "multistr"     : false,
      // typeof 연산자와 비교하는 값이 오류가 있더라도 경고를 내지 않도록 한다.
      "notypeof"     : false,
      // __proto__ 속성에 접근해도 경고를 하지 않게 한다.
      "proto"        : false,
      // 가상 스크립트 문법을 사용하더라도 오류를 발생시키지 않는다.
      // var x = 'javascript: foo ()';
      "scripturl"    : false,
      // 탭과 공백이 혼재해도 경고하지 않게 한다.
      "smarttabs"    : false,
      // 변수 이름에 shadow를 붙여도 오류가 발생하지 않도록 한다.
      "shadow"       : false,
      // obj['name']이 아니고 obj.name으로 사용하여도 오류가 발생하지 않게 설정한다.
      "sub"          : false,
      // new function(){ ... } 같은 경우도 오류로 발생하지 않게 한다.
      "supernew"     : false,
      // ※ 이 옵션은 함수 범위 내에서만 사용할 수있다. 글로벌에 이 옵션을 지정하면 JSHint 오류로 실패한다.
      "validthis"    : false
    }
```
