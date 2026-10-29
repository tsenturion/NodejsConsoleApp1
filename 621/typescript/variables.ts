function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

const firstNumber = getFirst([10, 20, 30]);

const firstName = getFirst([
    "Анна",
    "Иван",
    "Мария"
]);

console.log(firstNumber); // 10
console.log(firstName);   // Анна