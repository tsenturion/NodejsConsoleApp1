const product = {
    title: "Ноутбук",
    price: 85000,
    manufacturer: {
        name: "TechCompany",
        country: "Китай",
        contacts: {
            email: "support@example.com"
        }
    }
};

console.log(product.manufacturer.name);
console.log(product.manufacturer.contacts.email);