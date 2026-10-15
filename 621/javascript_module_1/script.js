const numbers = [10, 20, 30, 40, 50];

const removed = numbers.splice(1, 3);

console.log(removed); // [20, 30, 40]
console.log(numbers); // [10, 50]