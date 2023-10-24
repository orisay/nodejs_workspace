//JSON => 자바의 HashMap, 파이썬의 Dict, c# Dict
//배열은 인덱스로 값에 접근하는데 JSON 키와 값을 쌍으로 저장해서, 키를 이용해 값을 접근 하는 방식.
//키와 값 쌍의 형태로 정한다.
// {"키1":"값1", "키2""값2"}, 
//키 값은 문자열이나 심볼타입만 가능하다.
//값 타임은 아무거나 가능하다.
//자바 스크립트 키값에 "", '', 혹은 아무것도 안붙여도 가능하다. 
//"name", 'name' name 상관없다.
//백엔드랑 프론트하고 데이터 주고받을 때 JSON 형태로 주고 받지만 그러나 형태가 JSON 객체인거지
//실제로는 JSON객체가 아니라 문자열이다.
//원칙적으로 -(하이폰) 못들어간다.
let person = {
    "name": "홍길동",
    "age": 21,
    "phone": "010-0000-0000"
}
console.log(person.name);
console.log(person["name"]);
console.log("===============")
//객체배열
let persons = [
    {
        "name": "홍길동",
        "age": 12,
        "phone": "010-0000-0001"
    },
    {
        "name": "임꺽정",
        "age": 32,
        "phone": "010-0000-0002"
    },
    {
        "name": "장길산",
        "age": 43,
        "phone": "010-0000-0003"
    },
    {
        "name": "이은호",
        "age": 21,
        "phone": "010-0000-0004"
    },
    {
        "name": "곽윤희",
        "age": 23,
        "phone": "010-0000-0005"
    },
];

persons.forEach(p => {
    console.log(p.name, p.age, p.phone);
});

console.log("=============");

persons.filter((obj) => obj.age >= 30)
    .forEach(p => {
        console.log(p.name, p.age, p.phone);
    });

console.log("=============")
persons.filter(data => data.name.includes("길"))
    .forEach(p => {
        console.log("길이 들어간 사람 : " + p.name);
    });

console.log("==================")
//정렬 문자나, 숫자나 JSON 객체를 주면 객체와 객체를 비교할수는 없다.
//데이터 비교 함수를 전달해야 한다. 매개 변수가 두개의 객체를 주고

persons.sort((a, b) => a.age - b.age);
console.log(persons);

console.log("----------이름순으로 정렬-----------");
persons.sort((a, b) => a.name.localeCompare(b.name));
console.log(persons);

let scores = [
    { "name": "홍길동", "kor": 90, "eng": 80, "mat": 80 },
    { "name": "임꺽정", "kor": 100, "eng": 100, "mat": 100 },
    { "name": "장길산", "kor": 80, "eng": 80, "mat": 80 },
    { "name": "조승연", "kor": 70, "eng": 70, "mat": 70 },
    { "name": "김성훈", "kor": 60, "eng": 80, "mat": 60 },
    { "name": "임재범", "kor": 100, "eng": 80, "mat": 80 },
];

//문제1. map 함수를 사용하여 총점(total) 필드와 평균 (avg)필드를 추가하세요.
scores.map((s) => {
    /*     const total = data.kor + data.data.eng + data.mat;
        const avg = total / 3; */
    s.total = s.kor + s.eng + s.mat;
    s.avg = s.total / 3.0
    return s; //map()은 항상 return을 해줘야 한다. JSON으로 왔기에 직접해줘야한다.
    //toUpper는 얘가 햊줬다.
    //--map함수는 반드시 객체를 반환해야한다.
}).forEach((s)=>{
   console.log("문제1"+s.name, s.kor, s.eng, s.mat, s.avg, s.total);
});

//문제2. 총점을 기준으로 내림차순을 정렬하여 출력하세요.
scores.sort((s1, s2) => s2.total - s1.total).forEach((s) => {
    console.log("문제 2번 "+ s.name, s.total, s.avg)
});

//문제3. 평균이 80 이상인 학생들의 명단을 출력하세요.
scores.filter(s => s.avg > 80).forEach((s) => console.log("문제 3번 : "+ s.name));