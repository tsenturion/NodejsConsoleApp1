function inputNumberArray(): number[] {
    const numbers: number[] = [];
    let input: string | null;

    do {
        input = prompt("Write number please:");
        if (input && input.trim() !== "") {
            const num = parseFloat(input.trim());
            if (!isNaN(num)) {
                numbers.push(num);
            }
        }
    } while (input && input.trim() !== "");

    return numbers;
}

let numbers: number[] = inputNumberArray();
console.log(numbers)
const KeyNumber: { [key: string]: number } = {};

for (let i = 0; i < numbers.length; i++){
    KeyNumber["key" + i] = numbers[i]
}
console.log(KeyNumber)
