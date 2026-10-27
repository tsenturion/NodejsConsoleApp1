async function loadUserPosts() {
    const userResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!userResponse.ok) {
        throw new Error("Не удалось получить пользователя");
    }

    const user = await userResponse.json();

    const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );

    if (!postsResponse.ok) {
        throw new Error("Не удалось получить публикации");
    }

    const posts = await postsResponse.json();

    return {
        user,
        posts
    };
}

loadUserPosts()
    .then(data => {
        console.log("Пользователь:", data.user.name);
        console.log("Публикаций:", data.posts.length);
    })
    .catch(error => {
        console.error(error.message);
    });