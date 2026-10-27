Promise.resolve(10)
    .then(number => {
        if (number === 10) {
            throw new Error("Недопустимое значение");
        }

        return number * 2;
    })
    .then(result => {
        console.log("Результат:", result);
    })
    .catch(error => {
        console.log(error.message);
    });