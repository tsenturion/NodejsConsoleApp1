function getId<T extends { id: number }>(item: T): number {
    return item.id;
}

const user = {
    id: 15,
    name: "Алексей"
};

const product = {
    id: 25,
    title: "Ноутбук"
};

console.log(getId(user));    // 15
console.log(getId(product)); // 25