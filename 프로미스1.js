//프로미스1.js

let promise = new Promise ( function (resolve, reject) {
    // setTimeout(()=> resolve(100), 1000); //제작코드
    //setTimeOut 함수 (호출퇴함수, 시간) 미리초 단위로 사용된다 1000= 1초
   setTimeout(()=>reject("에러입니다."),1000);
}).then((res)=>{
    console.log(res);
}) //resolve 호출될 때 then 구문이 호출된다.
//resovle(값) ==> then 구문에서 호출될 함수 => 함수의 매개 변수 값으로 전달된다.
.catch((error)=>{
    console.log(error);
})

console.log(promise);