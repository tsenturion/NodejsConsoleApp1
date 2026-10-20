const original = {
    name: "Анна",
    age: 22
};

const copy = { ...original };

copy.age = 30;

console.log(original.age); // 22
console.log(copy.age);     // 30