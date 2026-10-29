interface Product {
    title: string;
    price: number;
    quantity: number;
}

const products: Product[] = [
    {
        title: "Ноутбук",
        price: 75000,
        quantity: 1
    },
    {
        title: "Монитор",
        price: 15000,
        quantity: 2
    },
    {
        title: "Мышь",
        price: 1200,
        quantity: 3
    }
];

function calculateTotal(products: Product[]): number {
    return products.reduce((sum, product) => {
        return sum + product.price * product.quantity;
    }, 0);
}

const total = calculateTotal(products);

console.log(`Общая стоимость: ${total} руб.`);