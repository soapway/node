console.log('code1');
console.time('timeout 0');
setTimeout(()=>{
    console.timeEnd('timeout 0');
    console.log('set timeout 0');
}, 0);

// console.log('code2');
// setImmediate(()=>{
//     console.log('set immediate');
// });

// console.log('code3');
// process.nextTick(()=>{
//     console.log('next tick');
// });

