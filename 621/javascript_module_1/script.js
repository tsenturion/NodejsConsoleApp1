const purchases = [250, 500, 120, 380];

const total = purchases.reduce((sum, price) => sum + price, 0);

console.log(total); // 1250