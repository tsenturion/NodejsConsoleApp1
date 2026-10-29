function calculateDiscount(
    price: number,
    discount = 10
): number {
    return price * (1 - discount / 100);
}

console.log(calculateDiscount(2000));     // 1800
console.log(calculateDiscount(2000, 25)); // 1500