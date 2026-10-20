const product = {
    title: "Наушники",
    quantity: 0
};

const quantity1 = product.quantity || 10;
const quantity2 = product.quantity ?? 10;

console.log(quantity1); // 10
console.log(quantity2); // 0