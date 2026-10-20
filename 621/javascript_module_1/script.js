function createDiscount(discountPercent) {
    return function(price) {
        return price * (1 - discountPercent / 100);
    };
}

const discount10 = createDiscount(10);
const discount25 = createDiscount(25);

console.log(discount10(2000)); // 1800
console.log(discount25(2000)); // 1500

console.log(discount10(500));  // 450