const users = [
    {
        id: 1,
        name: "Анна",
        age: 20,
        settings: {
            theme: "dark"
        }
    },
    {
        id: 2,
        name: "Иван",
        age: 17
    },
    {
        id: 3,
        name: "Мария",
        age: 25,
        settings: {
            theme: "light"
        }
    }
];

function updateUser(user, newAge) {
    return {
        ...user,
        age: newAge
    };
}

const updatedUsers = users.map(user => {
    if (user.id === 2) {
        return updateUser(user, 18);
    }

    return user;
});

const result = updatedUsers.map(user => {
    const { name, age } = user;
    const theme = user.settings?.theme ?? "default";

    return {
        name,
        age,
        theme,
        isAdult: age >= 18
    };
});

console.log(result);

console.log(users[1].age); // 17