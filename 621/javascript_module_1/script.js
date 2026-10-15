function divide(a, b) {
    if (b === 0) {
        return "Деление на ноль невозможно";
    }

    return a / b;
}

console.log(divide(20, 4)); // 5
console.log(divide(20, 0)); // Деление на ноль невозможно