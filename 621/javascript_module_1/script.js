function calculateTotal(...prices) {
    return prices.reduce((sum, price) => sum + price, 0);
}

console.log(calculateTotal(100, 200));      // 300
console.log(calculateTotal(50, 100, 150));  // 300
console.log(calculateTotal(500));           // 500
console.log(calculateTotal());              // 0