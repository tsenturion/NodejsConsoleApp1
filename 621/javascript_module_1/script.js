async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const user = await response.json();

    return user;
}

getUser().then(user => {
    console.log(user.name);
    console.log(user.email);
});