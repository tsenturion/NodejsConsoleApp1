const numbers = [4, 7, 10, 12, 15, 18, 25];

const result = numbers.filter(number => {
    return number >= 10 && number <= 20 && number % 2 === 0;
});

console.log(result); // [10, 12, 18]