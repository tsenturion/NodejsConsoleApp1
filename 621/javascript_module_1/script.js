async function getUser(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.json();
}

async function main() {
    try {
        const user = await getUser(1);

        console.log("Пользователь:", user.name);
    } catch (error) {
        console.log("Не удалось выполнить операцию");
        console.error(error.message);
    }
}

main();