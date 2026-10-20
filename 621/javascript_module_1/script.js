const original = [
    { name: "Анна" },
    { name: "Иван" }
];

const copy = [...original];

copy[0].name = "Мария";

console.log(original[0].name); // Мария