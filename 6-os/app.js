const os = require('os');

console.log(os.EOL === '\n');
console.log(os.EOL === '\r\n');

console.log(os.type());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.userInfo());
console.log(os.version());
console.log(os.cpus());