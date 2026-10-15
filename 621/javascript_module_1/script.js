const prices = [120, 250, 380];

const finalPrices = prices.map(price => {
    const tax = price * 0.2;
    const finalPrice = price + tax;

    return finalPrice;
});

console.log(finalPrices); // [144, 300, 456]