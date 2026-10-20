const product = {
    title: "Монитор",
    price: 15000
};

const result = {
    price: 10000,
    ...product
};

console.log(result.price); // 15000