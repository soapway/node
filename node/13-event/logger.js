const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started ... ');
    callback();
    this.emit('log', 'ended');
  }
}

module.exports.Logger = Logger;

//재사용성이 높은 이벤트 클래스 만들기
