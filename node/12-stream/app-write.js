const fs = require('fs');

const writeStream = fs.createWriteStream('file3.txt', 'utf-8');

writeStream.on('finish', () => {
  console.log('finish!');
});

writeStream.write('hello!');
writeStream.write('world!');
writeStream.end();

writeStream.on('error', (err) => {
  console.error(err);
});
