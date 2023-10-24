let http = require('http');
const hostName = "127.0.0.1";
const port = 4000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

server.listen(port, hostName, () => {
    console.log(`server running at http://${hostName}:${port}`);
})