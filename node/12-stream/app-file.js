const fs = require('fs');

const beforeMem = process.memoryUsage().rss;
// 지금 사용하고 있는 메모리의 상태
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {});
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  // 파일을 읽고 작성한 후의 메모리 상태
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed} MB`);
});
