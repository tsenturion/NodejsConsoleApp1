type Product = {
    id: number;
    title: string;
    price: number;
    available: boolean;
};

const product: Product = {
    id: 1,
    title: "Ноутбук",
    price: 75000,
    available: true
};

console.log(product.title);
console.log(product.price);