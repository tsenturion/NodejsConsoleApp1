async function createPost() {
    const post = {
        title: "Изучаем JavaScript",
        body: "Первая публикация через Fetch API",
        userId: 1
    };

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(post)
        }
    );

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.json();
}

async function main() {
    try {
        const createdPost = await createPost();

        console.log("Ответ сервера:", createdPost);
    } catch (error) {
        console.error("Не удалось создать публикацию:", error.message);
    }
}

main();