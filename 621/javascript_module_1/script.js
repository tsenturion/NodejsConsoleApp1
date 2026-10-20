const numbers1 = [10, 20, 30];
const numbers2 = numbers1;

numbers2[0] = 100;

console.log(numbers1); // [100, 20, 30]
console.log(numbers2); // [100, 20, 30]