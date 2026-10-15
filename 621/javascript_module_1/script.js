const prices = [1000, 1500, 2000];

const discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices); // [900, 1350, 1800]
console.log(prices);           // [1000, 1500, 2000]