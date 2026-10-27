const url = "https://jsonplaceholder.typicode.com/users/1";

fetch(url)
    .then(response => {
        console.log(response.status);

        return response.json();
    })
    .then(user => {
        console.log(user.name);
        console.log(user.email);
    })
    .catch(error => {
        console.error("Ошибка запроса:", error.message);
    });