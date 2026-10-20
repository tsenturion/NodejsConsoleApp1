const original = {
    name: "Анна",
    settings: {
        theme: "light",
        notifications: true
    },
    grades: [4, 5, 3]
};

const copy = structuredClone(original);

copy.settings.theme = "dark";
copy.grades[0] = 2;

console.log(original.settings.theme); // light
console.log(original.grades);         // [4, 5, 3]

console.log(copy.settings.theme); // dark
console.log(copy.grades);         // [2, 5, 3]