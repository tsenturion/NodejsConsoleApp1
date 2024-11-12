function inputNumberArray(): number[] {
    const numbers: number[] = [];
    let input: string | null;

    do {
        input = prompt("¬ведите число (дл€ завершени€ ввода введите пустую строку):");
        if (input && input.trim() !== "") {
            const num = parseFloat(input.trim());
            if (!isNaN(num)) numbers.push(num);
        }
    } while (input && input.trim() !== "");

    return numbers;
}

console.log("Ёлементы массива:", inputNumberArray());