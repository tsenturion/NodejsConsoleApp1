function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

const result = getFirst<number>([5, 10, 15]);

console.log(result); // 5