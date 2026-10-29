interface ApiUser {
    id: number;
    name: string;
    email: string;
}

function isApiUser(value: unknown): value is ApiUser {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const user = value as Record<string, unknown>;

    return (
        typeof user.id === "number" &&
        typeof user.name === "string" &&
        typeof user.email === "string"
    );
}

async function loadUser(id: number): Promise<ApiUser> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data: unknown = await response.json();

    if (!isApiUser(data)) {
        throw new Error("Неверная структура данных пользователя");
    }

    return data;
}

loadUser(1)
    .then(user => {
        console.log("Имя:", user.name);
        console.log("Email:", user.email);
    })
    .catch(error => {
        console.error("Ошибка:", error.message);
    });