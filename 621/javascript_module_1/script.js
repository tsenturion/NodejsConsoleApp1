const functions = [];

for (let i = 0; i < 3; i++) {
    functions.push(() => i);
}

console.log(functions[0]()); // 0
console.log(functions[1]()); // 1
console.log(functions[2]()); // 2