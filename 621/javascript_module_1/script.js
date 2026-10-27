function waitAndDouble(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(number * 2);
        }, 1000);
    });
}

waitAndDouble(5)
    .then(result => {
        console.log(result); // 10
        return waitAndDouble(result);
    })
    .then(result => {
        console.log(result); // 20
        return waitAndDouble(result);
    })
    .then(result => {
        console.log(result); // 40
    });