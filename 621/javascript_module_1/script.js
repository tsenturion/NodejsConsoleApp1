function greet(name = "Гость") {
    return `Привет, ${name}!`;
}

console.log(greet("Анна")); // Привет, Анна!
console.log(greet());       // Привет, Гость!