function loadUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Алексей",
                age: 25
            });
        }, 2000);
    });
}

console.log("Начинаем загрузку");

loadUser().then(user => {
    console.log("Данные получены");
    console.log(user.name);
});

console.log("Программа продолжает работу");