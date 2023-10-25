let express = require('express');
let app = express();
let path = require('path'); // 파일 경로를 상대 경로 => 실제 경로(물리적 경로를 알아오거나) 혹은 경로를 만들기도하고
//app - express 서버임

//view 엔진을 설정해야 한다.
//환경 변수 - 스프링 설정 (application. properties)
//qustnsk gkatnwnddp __(언더바 두개로) 시작하는 요소들은 시스템이 제공하는 내장변수나 함수이다.
// __dirname : 현재 프로젝트가 가동중인 폴더 정보를 가져온다.
//현재 폴더 밑에 /view 폴더아래 html 문서를 두겠다
app.set('views', path.join(__dirname, "views")); //''나 ""나 ``나 같은 걸로 받아들인다.
app.set("view engine", "ejs"); //스프링 - JSP, 머스티치, 타임리프 - node ejs를 사용하겠다.
//Post 처리를 위한 필수 코드
//body parse 주로 위에 있어야한다.
app.use(express.urlencoded({ extended: false }));
//3가지 있다 get 방식 처리만 하겠다 
//get: get방식만 처리 post: post방식만 처리
//use: get도 post도 처리

//DB 대신 여기에서 JSON 객체 배열로 데이터를 만든다.
//board_list 스네이크 표기법 boardList 카멜표기법
boardList = [
    { "id": 1, "title": "원피스", "author": "오다" },
    { "id": 2, "title": "용비불패", "author": "문정후" },
    { "id": 3, "title": "고수", "author": "문정후" },
    { "id": 4, "title": "무빙", "author": "강풀" },
    { "id": 5, "title": "마음의소리", "author": "조석" },
];
app.get("/board/list", (req, res) => {
    res.render("board/board_list", { "boardList": boardList });
});

app.get("/board/view/:id", (req, res) => {
    let id = parseInt(req.params.id); // id를 123 배열인덱스 0
    res.render("board/board_view", { "board": boardList[id - 1] });
});

app.get("/board/write", (req, res) => {
    res.render("board/board_write", {});
});

app.post("/board/save", (req, res) => {
    let id = boardList.length + 1;
    let title = req.body.title;
    let author = req.body.author;
    boardList.push({ "id": id, "title": title, "author": author });
    res.redirect("/board/list");
})

//ajax - Asychronous java script xml
/* 클라이언트 ----> 서버로 비동기로 전송
            <---- 실행한 결과를 보낸다.  xml */

app.post("/board/save2", (req, res) => {
    let id = boardList.length + 1;
    let title = req.body.title;
    let author = req.body.author;
    boardList.push({ "id": id, "title": title, "author": author });
    res.send({result:"success"});
})
app.get("/", (req, res) => {
    //자바스크립트 => class 개념을 존재하지만 잘 안쓴다.
    res.render("index", { "name": "홍길동", age: 12 });
    //확장자명 안적어도 된다
    //res.send : json형태로 데이터를 화면에 출력한다. 결과를 JSON 형태로 보내고자 할 때 많이 사용한다. data만 보낼 때
    //res.end : text/html 형태로 출력한다. 테스트용, 실제로 사용 안함
    //res.render : html 문서와 데이터를 합쳐서 새로운 html를 만들어 보낸다. 랜더링한다.
})

//미들웨어 --중간에서 가로채서 처리를 하는 함수
//서블릿 -> 상속을 써서

// 모든 url에 대해서 이 함수가 처리를 한다.


app.use("/a", function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is A</h1>");
});


//부가적인 정보가 전달되면
//get,
//get2
//post



// http://127.0.0.1:4000/add?x=5&y=7 
app.use("/add", function (req, res) {
    let x = parseInt(req.query.x);
    let y = parseInt(req.query.y);
    let result = x + y;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>/add req.query  ${x} + ${y} = ${result}*********</h1>`);
});

// http://127.0.0.1:4000/add2/5/7 
app.use("/add2/:x/:y", function (req, res) {
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    let result = x + y;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>/add2 req.params ${x} + ${y} = ${result}*********</h1>`);
});

app.use("/add_post", function (req, res) {
    console.log("req.body" + req);
    let x = parseInt(req.body.x);
    let y = parseInt(req.body.y);
    let result = x + y;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>====${x} + ${y} = ${result}====</h1>`);
});




app.use(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Express</h1>");
});
//위에서부터 처리를 한다.

//적당하지 않은 url 처리를 이 함수 내에서 해야 한다.
//모든 url 처리를 얘가한다.

app.listen(4000, () => {
    console.log("server start at http://127.0.0.1:4000");
})

