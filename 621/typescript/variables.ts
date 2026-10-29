function formatId(id: number | string): string {
    if (typeof id === "number") {
        return `ID-${id}`;
    }

    return id.toUpperCase();
}

console.log(formatId(15));       // ID-15
console.log(formatId("user-25")); // USER-25