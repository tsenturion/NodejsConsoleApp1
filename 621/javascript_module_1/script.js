const tax = 0.2;

function calculatePrice(price) {
    const discount = 0.1;

    return price * (1 - discount) * (1 + tax);
}

console.log(calculatePrice(1000)); // 1080
console.log(tax);                  // 0.2