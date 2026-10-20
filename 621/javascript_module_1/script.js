const numbers = [10, 20, 30, 40, 50];

const [first, ...otherNumbers] = numbers;

console.log(first);        // 10
console.log(otherNumbers); // [20, 30, 40, 50]