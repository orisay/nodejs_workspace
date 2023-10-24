//동기처리.js
//변수 선언이 없다. 그래도 선언하고 싶다 var 또는 let 사용이한다.
//var - old 버전 , let - new 버전 , 가급적 let를 사용해라
//var - 호이스팅 문제가 발생, 두번 선언 가능 , 변수가 스코프룰 처리가 안된다.
let fs = require("fs"); //외부에 있는 fs모듈을 사용하겠다.
// const { encode } = require("punycode");
//자바 스크립트로 파일을 읽는다. readFile, feadFileSync가 있다
//readFile - 비동기 모드 Default value
let result = fs.readFileSync("test.txt", encode = "utf8");
console.log(result);