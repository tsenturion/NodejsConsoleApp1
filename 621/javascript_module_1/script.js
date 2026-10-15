const prices = [500, 100, 300];

const sortedPrices = prices.sort((a, b) => a - b);

console.log(sortedPrices); // [100, 300, 500]
console.log(prices);       // [100, 300, 500]