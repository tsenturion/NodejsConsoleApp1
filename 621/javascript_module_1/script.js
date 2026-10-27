fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(
                `Ошибка HTTP: ${response.status}`
            );
        }

        return response.json();
    })
    .then(user => {
        console.log("Пользователь:", user.name);
    })
    .catch(error => {
        console.error(error.message);
    });