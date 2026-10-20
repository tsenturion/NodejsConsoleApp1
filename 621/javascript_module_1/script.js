const user = {
    name: "Анна",
    city: null
};

const city = user.city ?? "Город не указан";

console.log(city); // Город не указан