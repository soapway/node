const http = require('http');
const ejs = require('ejs');

const name = 'soap';
const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Javascript' },
  { name: 'node' },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    ejs.renderFile('./template/hello.ejs', { name: name }, (error, data) => {
      res.end(data);
      console.error(error);
    });
  } else if (url === '/courses') {
    ejs.renderFile(
      './template/courses.ejs',
      { courses: courses, name: name },
      (error, data) => {
        res.end(data);
        console.error(error);
      }
    );
  } else {
    ejs.renderFile('./template/notFound.ejs', { name: name }, (error, data) => {
      res.end(data);
      console.error(error);
    });
  }
});

server.listen(8080);
