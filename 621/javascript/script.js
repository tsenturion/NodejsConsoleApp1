function calculateDiscount(price, percent) {
    return price * (1 - percent / 100);
}

console.log(calculateDiscount(1000, 10)); // 900
console.log(calculateDiscount(1000, 10)); // 900