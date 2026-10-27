function loadUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: "Анна",
                age: 22
            });
        }, 2000);
    });
}

function loadSettings() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                theme: "dark",
                language: "ru"
            });
        }, 1000);
    });
}

Promise.all([
    loadUser(),
    loadSettings()
]).then(results => {
    const [user, settings] = results;

    console.log("Пользователь:", user.name);
    console.log("Тема:", settings.theme);
});