function calculateSum(data) {
    if (!Array.isArray(data)) {
        return "Ожидался массив";
    }

    return data.reduce((sum, number) => sum + number, 0);
}

console.log(calculateSum([10, 20, 30])); // 60
console.log(calculateSum("10, 20, 30"));  // Ожидался массив