//규모있는 프로젝트는 모듈을 사용한다.
// counter.js는 export를, app.js는 import를

const counter = require('./counter.js');

counter.increase();
counter.increase();
console.log(counter.getCount());
