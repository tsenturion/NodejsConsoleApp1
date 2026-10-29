interface Container<T> {
    value: T;
    updatedAt: string;
}

const numberContainer: Container<number> = {
    value: 100,
    updatedAt: "2026-10-29"
};

const stringContainer: Container<string> = {
    value: "Готово",
    updatedAt: "2026-10-29"
};

console.log(numberContainer.value);
console.log(stringContainer.value);