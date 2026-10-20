const product = {
    title: "Ноутбук",
    manufacturer: {
        name: "TechCompany"
    }
};

console.log(product?.manufacturer?.name);
// TechCompany

console.log(product?.manufacturer?.contacts?.email);
// undefined