function loadData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Данные загружены");
        }, 1500);
    });
}

console.log("Загрузка...");

loadData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Ошибка:", error.message);
    })
    .finally(() => {
        console.log("Операция завершена");
    });