const product = {
    title: "Монитор",
    price: 15000,
    quantity: 5
};

const updatedProduct = {
    ...product,
    price: 13500
};

console.log(updatedProduct);
// { title: "Монитор", price: 13500, quantity: 5 }