let a = 1;

const interval = setInterval(() => {
    console.log(a++);
}, 1000); //ms 기준

setTimeout(()=>{
    console.log('time out!');
    clearInterval(interval);
}, 5000);