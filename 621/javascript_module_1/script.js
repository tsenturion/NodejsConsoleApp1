function loadUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 1,
                name: "Алексей",
                age: 25
            };

            resolve(user);
        }, 2000);
    });
}

const result = loadUser();

console.log(result);