function getProductInfo({ title, price, quantity }) {
    return `${title}: ${price * quantity} руб.`;
}

const product = {
    title: "Клавиатура",
    price: 2500,
    quantity: 3
};

console.log(getProductInfo(product));
// Клавиатура: 7500 руб.