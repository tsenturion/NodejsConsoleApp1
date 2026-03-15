console.log("начало");
setTimeout(() => {
    console.log("setTimeout")
}, 1000);
const timer = setInterval(() => {
    console.log("setInterval")
}, 500);

setTimeout(() => {
    clearInterval(timer);
    console.log("setInterval остановлен")
}, 3000);
console.log("конец");