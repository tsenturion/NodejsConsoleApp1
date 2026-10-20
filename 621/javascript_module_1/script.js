const users = [
    { name: "Анна" },
    { name: "Иван" }
];

console.log(users[0]?.name);  // Анна
console.log(users[10]?.name); // undefined

const settings = {};

settings.onSave?.();

console.log("Программа продолжает работу");