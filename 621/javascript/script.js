const user = {
    name: "Анна",
    visits: 0
};

function getUserInfo(user) {
    user.visits++;

    return `${user.name}: ${user.visits}`;
}

console.log(getUserInfo(user)); // Анна: 1
console.log(getUserInfo(user)); // Анна: 2

const user = {
    name: "Анна",
    visits: 0
};

function getUserInfo(user) {
    return `${user.name}: ${user.visits}`;
}

function increaseVisits(user) {
    return {
        ...user,
        visits: user.visits + 1
    };
}

const updatedUser = increaseVisits(user);

console.log(getUserInfo(user));        // Анна: 0
console.log(getUserInfo(updatedUser)); // Анна: 1