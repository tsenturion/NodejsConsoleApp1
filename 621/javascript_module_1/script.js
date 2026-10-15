const double = number => number * 2;
const square = number => number * number;

function processNumber(number, operation) {
    return operation(number);
}

console.log(processNumber(5, double)); // 10
console.log(processNumber(5, square)); // 25