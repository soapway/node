const logger = require('./logger');
const emitter = new logger.Logger();

emitter.on('log', (event) => {
  console.log(event);
});
emitter.log(() => {
  console.log('......doing.....');
});
// 여기는 emitter를 다시 만들 필요가 없음
// 듣고 반응하는 이벤트 이미터는 같아야 하므로
