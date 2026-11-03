const cart = [
    { id: 1, price: 1000, quantity: 2 },
    { id: 2, price: 500, quantity: 3 }
];

function getCartSummary(cart) {
    const itemsCount = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return {
        itemsCount,
        totalPrice
    };
}

console.log(getCartSummary(cart));
// { itemsCount: 5, totalPrice: 3500 }