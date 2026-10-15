const numbers = [30, 10, 20];

const copiedNumbers = numbers.slice();

copiedNumbers.sort((a, b) => a - b);

console.log(numbers);       // [30, 10, 20]
console.log(copiedNumbers); // [10, 20, 30]