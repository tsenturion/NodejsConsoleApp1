const products = [
    { title: "Ноутбук", price: 75000 },
    { title: "Мышь", price: 1500 },
    { title: "Клавиатура", price: 4500 }
];

const total = products.reduce(
    (sum, product) => sum + product.price,
    0
);

console.log("Общая стоимость:", total);