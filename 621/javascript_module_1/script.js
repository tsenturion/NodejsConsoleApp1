const original = {
    name: "Анна",
    settings: {
        theme: "light",
        notifications: true
    }
};

const copy = { ...original };

copy.name = "Мария";
copy.settings.theme = "dark";

console.log(original.name);           // Анна
console.log(original.settings.theme); // dark