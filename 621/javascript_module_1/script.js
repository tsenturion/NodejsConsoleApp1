const parent = {
    role: "Пользователь"
};

const user = Object.create(parent);

user.name = "Анна";
user.age = 20;

for (const key in user) {
    console.log(key);
}