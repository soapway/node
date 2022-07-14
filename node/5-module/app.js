//규모있는 프로젝트는 모듈을 사용한다.
// counter.js는 export를, app.js는 import를

import { increase, getCount } from "./counter.js";
// import { * as counter } from "./counter.js";

increase();
increase();
console.log(getCount());


