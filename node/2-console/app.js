'use strict';
console.log('logging... ....');

//지우기
console.clear();

//로그 레벨
console.log('log');
console.info('info');
console.warn('warn');
console.error('error');

//어설트(거짓일 때만 로그에 표시)
console.assert(false, 'it is false');
console.assert(true, 'it is true');

//오브젝트 표시
const coffee = { temp: 'hot', milk: 'soy', syrup: 'vanila', company: {name: 'starbucks', loc: 'newyork'}};
console.log(coffee);
console.table(coffee);
console.dir(coffee, {showHidden: true, colors: false, depth: 0});

console.clear();

//시간 재기(효율성, 속도 체크)
console.time('for loop');
for(let i = 0; i <10 ; i++){
    i++;
}
console.timeEnd('for loop');

//개수 세기
function a(){
    console.count('a function');
}
a();
a();
console.countReset('a function');
a();

//트레이스(추적, 디버깅에 유용)
function f1(){
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.log('f3');
    console.trace('show me');
}

f1();