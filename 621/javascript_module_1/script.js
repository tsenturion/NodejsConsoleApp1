function getNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

getNumber()
    .then(number => {
        console.log("Первое значение:", number);
        return number * 2;
    })
    .then(number => {
        console.log("Второе значение:", number);
        return number + 5;
    })
    .then(number => {
        console.log("Итог:", number);
    });