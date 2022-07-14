const fs = require('fs');
const zlib = require('zlib');
// node js에서 사용할 수 있는 압축

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('file4.zip');

const piping = readStream.pipe(zlibStream).pipe(writeStream);
// PIPING: 읽으면서 작성을 할 수 있게 하는 연결

piping.on('finish', () => {
  console.log('done!');
});

//서버에서도 유용하다
