const numbers = [2, 5, 2, 8, 5, 10, 8];

const uniqueNumbers = [];

for (const number of numbers) {
    if (!uniqueNumbers.includes(number)) {
        uniqueNumbers.push(number);
    }
}

console.log(uniqueNumbers);
// [2, 5, 8, 10]