const discount = 0.1;

function calculatePrice(price) {
    const discount = 0.2;

    return price * (1 - discount);
}

console.log(calculatePrice(1000)); // 800
console.log(discount);             // 0.1