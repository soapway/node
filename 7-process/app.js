const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());


setTimeout(() =>{
    console.log('set time out');
}, 0)
//뒤에 지정한 시간만큼 지난 후에 콜백 함수가 실행된다.

process.nextTick(() => {
    console.log('next tick');
}); // 현재 수행하고 있는 과정이 끝나면 nextTick에 들어간 콜백함수를
// 태스크 큐에 넣어달라고 요청하는 함수
// setTimeOut()과 비슷하다

for(let i = 0; i < 1000; i++){
    console.log('for looop!');
}