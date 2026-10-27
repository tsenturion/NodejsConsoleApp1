console.log("Начало");

setTimeout(() => {
    console.log("Таймер");
}, 0);

Promise.resolve().then(() => {
    console.log("Промис");
});

console.log("Конец");