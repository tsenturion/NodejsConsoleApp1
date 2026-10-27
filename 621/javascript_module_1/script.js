let count = 0;

const intervalId = setInterval(() => {
    count++;

    console.log("Значение счётчика:", count);

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Повторение остановлено");
    }
}, 1000);