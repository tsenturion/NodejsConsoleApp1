const numbers = [10, 20, 30];

const result = numbers.reduce((sum, number) => {
    return sum + number;
});

console.log(result); // 60