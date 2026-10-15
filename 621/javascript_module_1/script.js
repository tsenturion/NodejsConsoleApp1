function processNumber(number, operation) {
    return operation(number);
}

const result = processNumber(10, number => number + 5);

console.log(result); // 15