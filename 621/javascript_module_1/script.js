const prices = [500, 1200, 800, 2000, 1500];

const total = prices
    .filter(price => price > 1000)
    .map(price => price * 0.9)
    .reduce((sum, price) => sum + price, 0);

console.log(total); // 4230