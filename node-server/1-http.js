const http = require('http');
const http2 = require('http2'); // https
// 일단은 http로 개발

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('listener');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./html/hello.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
  } else {
    fs.createReadStream('./html/notFound.html').pipe(res);
  }
});

server.listen(8080);
