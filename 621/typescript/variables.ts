function calculateTotal(
    price: number,
    quantity: number
): number {
    return price * quantity;
}

const total = calculateTotal(1500, 3);

console.log(total); // 4500