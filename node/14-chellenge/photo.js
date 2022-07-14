// 동영상은 동영상 폴더로
// 캡처인 .png와 .aac는 캡처 폴더로
// 수정 파일(E)만 남기고 원본은 중복 폴더로 이동
const fs = require('fs');

if (process.argv[2] === 'test') {
  const testFolder = './14-chellenge/' + process.argv[2] + '/';
  const array = ['video', 'capture', 'duplicated'];
  for (let i = 0; i < array.length; i++) {
    fs.mkdir(testFolder + array[i] + '/', (err) => {
      console.error(err);
    });
    console.log(testFolder + array[i] + '/');
  }
  fs.readdir(testFolder, (err, files) => {
    files.forEach((file) => {
      switch (file.split('.')[1]) {
        case 'mp4':
        case 'mov':
          fs.rename(testFolder + file, testFolder + 'video/' + file, (err) => {
            console.error(err);
          });
          break;

        case 'aae':
        case 'png':
          fs.rename(
            testFolder + file,
            testFolder + 'capture/' + file,
            (err) => {
              console.error(err);
            }
          );
          break;

        case 'jpg':
          if (file.split('_')[1].toString().substring(0, 1) !== 'E') {
            fs.rename(
              testFolder + file,
              testFolder + 'duplicated/' + file,
              (err) => {
                console.error(err);
              }
            );
          }
          break;
      }
    });
  });
} else {
  console.log('we lost argv, please type test');
}
