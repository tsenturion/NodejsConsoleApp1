const calculateDiscount = (price, discount) => {
    return price - price * discount / 100;
};

const finalPrice = calculateDiscount(1000, 15);

console.log(finalPrice);