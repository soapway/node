const fs = require('fs');
//file system

//모든 api는 3가지 형태로 제공된다.

//try{renameSync(....)} catch(e){ } 동기
//프로그램이 멈추지 않도록 트라이캐치
try {
  fs.renameSync('./text.txt', './new-text.txt');
} catch (error) {
  console.log('no such things');
}
console.log('good!');

//rename(...., callback(error)) 비동기
fs.rename('./new-text.txt', './renamed-text.txt', (error) => {
  console.error(error);
});
console.log('good!');

//promises.rename(),then(),catch(0) 프로미스 : 비동기
fs.promises
  .rename('./renamed-text', './text.txt')
  .then(console.log('Done!'))
  .catch(console.error('no such things'));
