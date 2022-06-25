const fs = require('fs');
//전역 객체 글로벌이라는 걸 알려주기 위해 모듈 부르기


// console.log(global);

global.hello = () => {
    console.log('hello!');
    global.console.log('hi!');
}

global.hello();

hello();