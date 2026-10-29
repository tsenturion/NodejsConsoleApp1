function greet(name: string, title?: string): string {
    if (title !== undefined) {
        return `Здравствуйте, ${title} ${name}!`;
    }

    return `Здравствуйте, ${name}!`;
}

console.log(greet("Иван"));
console.log(greet("Иван", "доктор"));