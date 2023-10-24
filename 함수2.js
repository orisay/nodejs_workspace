//문자열에 대해서 람다적용하기

let words = ["school", "survey", "rain", "rainbow", "cloud", "desk", "hospital", "guesthouse", "guest"];

//단어를 for문을사용안하고 출력하기 forEach 함수는 매개변수가 두개이고 반환값이 없는 함수를 매개변수로 받는다.
//주로 출력을 하고자 할떄 많이 사용한다. (인자, 인자의 인덱스)
//인덱스는 생략가능하다.
words.forEach((a) => {
    console.log(a); //매개변수 이름은 마음대로 붙일 수 있다.
});

console.log("=========================")

words.forEach((a, index) => {
    console.log(a, index); //매개변수 이름은 마음대로 붙일 수 있다.
    //return 의마가 없다.
});

console.log("=========================")
let length5 = words.filter((x) => x.length >= 5);
//함수의 수행 결과과 true인 데이터만 새로울 배열로 만들어서 전달한다.
console.log(length5);
length5.forEach(w => console.log(w));
console.log("출력 foreach===========");
length5.forEach(data => console.log(data));
console.log("map 수행=========================")
//map 함수는 매개변수를 받아서 연산을 수행한다. 바뀐값을 배열을 출력한다.
let result = words.map(w => w.toUpperCase());
console.log(result);
console.log(words);
console.log("================")
words.map(w => w.toUpperCase())
    .filter(w => w[0] == "S" || w[0] == "H")
    .forEach(w => console.log(w)); //forEach - 최종연산 리턴 반환안함

console.log("================")
//정렬 sort - 자기 자신이 순서를 바꾼다.
// toSorted() - 순서를 정렬한 배열을 리턴한다. 자기 순서는 안바뀐다.
/* words.sort();
console.log(words); */
//Nodee.js 20버전 이상
// let orderd = words.toSorted();
// console.log(orderd);

