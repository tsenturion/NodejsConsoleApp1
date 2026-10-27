console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");

for (let i = 0; i < 100000000; i++) {
    // Имитируем длительные вычисления
}

console.log("D");