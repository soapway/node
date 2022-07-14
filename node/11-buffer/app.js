const buf = Buffer.from('hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString()); //'utf-8'이 기본

//create

const buf2 = Buffer.alloc(2); //사용가능한 메모리 덩어리를 찾아서 초기화
const buf3 = Buffer.allocUnsafe(2); //공간을 찾지만 초기화하지 않음: 빠르지만 안전하지 않음

buf2[0] = 72;
buf2[1] = 105;

console.log(buf2);
console.log(buf2.toString());

buf2.copy(buf3);

console.log(buf3);
console.log(buf3.toString());

//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
