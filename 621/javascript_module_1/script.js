function calculateTotal(price, quantity) {
    const total = price * quantity;
    return total;
}

const firstOrder = calculateTotal(100, 3);
const secondOrder = calculateTotal(250, 2);

console.log(firstOrder);
console.log(secondOrder);