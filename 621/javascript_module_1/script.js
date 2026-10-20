const functions = [];

for (var i = 0; i < 3; i++) {
    functions.push(() => i);
}

console.log(functions[0]()); // 3
console.log(functions[1]()); // 3
console.log(functions[2]()); // 3