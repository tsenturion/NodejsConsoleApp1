const original = {
    name: "Анна",
    settings: {
        theme: "light",
        notifications: true
    }
};

const updated = {
    ...original,
    settings: {
        ...original.settings,
        theme: "dark"
    }
};

console.log(original.settings.theme); // light
console.log(updated.settings.theme);  // dark