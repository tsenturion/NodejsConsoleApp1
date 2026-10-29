interface ApiUser {
    id: number;
    name: string;
    email: string;
}

interface ApiUser {
    id: number;
    name: string;
    email: string;
}

async function loadUser(id: number): Promise<ApiUser> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data = await response.json();

    return data as ApiUser;
}

loadUser(1)
    .then(user => {
        console.log(user.name);
        console.log(user.email);
    })
    .catch(error => {
        console.error(error.message);
    });