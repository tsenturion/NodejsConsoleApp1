const timerId = setTimeout(() => {
    console.log("Это сообщение не появится");
}, 3000);

clearTimeout(timerId);

console.log("Таймер отменён");