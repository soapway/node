const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep); //구분자
console.log(path.delimiter); //환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname
console.log(path.dirname(__filename));

//extname
console.log(path.extname(__filename));

//parse
const parsedName = path.parse(__filename);
console.log(parsedName);
console.log(parsedName.name);

const strName = path.format(parsedName);
console.log(strName);

//isAbsolute
console.log('is absolute path?', path.isAbsolute(strName));
console.log('is absolute path?', path.isAbsolute('../'));

//normalize
console.log(path.normalize('../9-path///////////'));

//join
console.log(path.join('../member', '/node/node.jpg'));
