//비동기식처리.js
let fs = require("fs");

//비동기 모드의 경우에 함수는 값을 반환하지 못한다.
//result = 함수(); 비동기는 못한다.
//함수의 매개변수로 함수를 전달해야한다. 호출자는 시스템이다.
//-> 콜백함수라고 부른다. 콜백함수의 매개변수는 정해져있다.
//함수의 정의, 함수의 표현식, 화살표 함수
//비동기 함수는 리턴값을 사용하지 못한다.

let result = fs.readFile("./test.txt", encode = "utf-8",
    function (error, data) {
        if (error) {
            console.log("에러메세지 출력합시다."+error);
            return;
        }
        console.log("data : " + data);
    });
    console.log("result : "+ result);
    console.log("완료-----------");