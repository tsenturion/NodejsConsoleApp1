async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.json();
}

async function main() {
    const user = await getUser();

    console.log("Имя:", user.name);
    console.log("Email:", user.email);
}

main().catch(error => {
    console.error(error.message);
});