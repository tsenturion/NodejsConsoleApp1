const product = {
    title: "Ноутбук",
    manufacturer: {
        name: "TechCompany",
        country: "Китай"
    }
};

product.manufacturer.country = "Япония";

console.log(product.manufacturer.country); // Япония