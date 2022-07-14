const fs = require('fs');

const data = [];
const readStream = fs.createReadStream('./file.txt', {
  //   highWaterMark: 8,
  //   encoding: 'UTF-8',
});

// 이벤트에 따라 다른 동작을 만들 수 있음

readStream.on('data', (chuck) => {
  data.push(chuck);
  console.count(chuck);
});

readStream.on('end', () => {
  console.log(data.join(''));
});

readStream.on('event', (error) => {
  console.error('error');
});

// on은 자기 자신을 리턴한다.
// const data = [];
// fs.createReadStream('./file.txt', {
//   //   highWaterMark: 8,
//   //   encoding: 'UTF-8',
// }).on('data', (chuck) => {
//     data.push(chuck);
//     console.count(chuck);
//   }).on('end', () => {
//     console.log(data.join(''));
//   })readStream.on('event', (error) => {
//     console.error('error');
//   });

// on은 데이터가 올 때마다 반복하고, once는 딱 한 번만 수행
