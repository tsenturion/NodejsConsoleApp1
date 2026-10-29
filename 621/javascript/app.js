async function loadUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/999999"
    );

    console.log(response.status);

    if (!response.ok) {
        throw new Error("Пользователь не найден");
    }

    return await response.json();
}

loadUser().catch(error => {
    console.error(error.message);
});