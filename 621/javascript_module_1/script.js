function checkBalance(balance, price) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (balance >= price) {
                resolve("Покупка разрешена");
            } else {
                reject(new Error("Недостаточно средств"));
            }
        }, 1000);
    });
}

checkBalance(500, 800)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Ошибка:", error.message);
    });