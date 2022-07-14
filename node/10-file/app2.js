const fs = require('fs').promises;

// read file
fs.readFile('./renamed-text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch(console.error);
// 인코딩을 지정 안 하면 buffer로 읽어온다

// write file
fs.writeFile('./file.txt', 'write by fs.writeFile()') //
  .catch(console.error);

console.log('---------');

fs.writeFile('./file.txt', 'wrote by fs.writeFile()') //
  .catch(console.error);

// 같은 파일 이름이 있다면 덮어쓰기 된다

// apppend file
fs.appendFile('./file.txt', ' add data! ') //
  .then(() => {
    // copy file : 비동기라서 연속적으로 하려면 포함해야 함
    fs.copyFile('./file.txt', './copy-file.txt') //
      .catch(console.error);
  })
  .catch(console.error);

// folder
fs.mkdir('./test').catch(console.error);

fs.readdir('./').then(console.log).catch(console.error);
