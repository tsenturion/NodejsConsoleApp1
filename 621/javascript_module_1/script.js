const user = {
    name: "Анна",
    address: {
        city: "Казань",
        street: "Центральная"
    }
};

const {
    name,
    address: { city, street }
} = user;

console.log(name);   // Анна
console.log(city);   // Казань
console.log(street); // Центральная