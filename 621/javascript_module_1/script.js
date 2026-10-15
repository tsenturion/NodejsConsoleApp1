function applyDiscount(price) {
    if (price >= 2000) {
        return price * 0.8;
    }

    if (price >= 1000) {
        return price * 0.9;
    }

    return price;
}

const prices = [500, 1200, 2500, 800];

const discountedPrices = prices.map(applyDiscount);

console.log(discountedPrices);
// [500, 1080, 2000, 800]