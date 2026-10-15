const numbers = [2, 3, 4, 5];

const product = numbers.reduce((result, number) => {
    return result * number;
}, 1);

console.log(product); // 120