const user = {
    name: "Мария",
    email: "maria@example.com",
    password: "secret123"
};

const { password, ...publicData } = user;

console.log(publicData);
// { name: "Мария", email: "maria@example.com" }