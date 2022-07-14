const EventEmitter = require('events');

const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log('first callback - ', args);
};

emitter.on('dreamCode', callback1);

emitter.on('dreamCode', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('dreamCode', { message: 1 });
emitter.emit('dreamCode', { message: 2 });

emitter.removeListener('dreamCode', callback1);
// 콜백 함수 제거하기
// 다 지우면 removeAllListener()

emitter.emit('dreamCode', { message: 3 });

// 앞선 스트림리드-라이트는 event emitter를 상속받기 때문에
// .on()을 사용할 수 있는 것
