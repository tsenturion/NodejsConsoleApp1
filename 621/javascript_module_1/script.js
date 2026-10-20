const user = {
    name: "Мария",
    age: 22
};

const { name, age, city = "Не указан" } = user;

console.log(name); // Мария
console.log(age);  // 22
console.log(city); // Не указан