function createCounter(start = 0) {
    let count = start;

    return function() {
        count++;
        return count;
    };
}

const counterA = createCounter(0);
const counterB = createCounter(10);

console.log(counterA()); // 1
console.log(counterA()); // 2

console.log(counterB()); // 11
console.log(counterB()); // 12

console.log(counterA()); // 3