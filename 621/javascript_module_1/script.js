function calculatePrice(price, discount) {
    const discountAmount = price * discount / 100;
    return price - discountAmount;
}

const result = calculatePrice(2000, 15);

console.log(result); // 1700