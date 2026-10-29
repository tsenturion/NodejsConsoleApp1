interface Product {
    readonly id: number;
    title: string;
    price: number;
}

const product: Product = {
    id: 1,
    title: "Монитор",
    price: 15000
};

product.price = 14000;

console.log(product);