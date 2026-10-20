const product = {
    title: "Телефон",
    price: 30000,
    quantity: 5
};

for (const entry of Object.entries(product)) {
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`);
}