type MathOperation = (
    a: number,
    b: number
) => number;

const add: MathOperation = (a, b) => a + b;

const subtract: MathOperation = (a, b) => a - b;

console.log(add(10, 5));      // 15
console.log(subtract(10, 5)); // 5