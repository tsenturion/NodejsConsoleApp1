const parent = {
    role: "Пользователь"
};

const user = Object.create(parent);

user.name = "Анна";
user.age = 20;

for (const key in user) {
    if (Object.hasOwn(user, key)) {
        console.log(key, user[key]);
    }
}