const user = {
    id: 15,
    name: "Алексей",
    age: 25,
    city: "Москва"
};

const { id, ...userData } = user;

console.log(id); // 15

console.log(userData);
// { name: "Алексей", age: 25, city: "Москва" }