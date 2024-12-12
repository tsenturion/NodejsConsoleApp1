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
let keyValue = Object.keys(KeyNumber)
let keyEnds: number[] = []; 
for (let i = 0; i < keyValue.length; i++) {
    let key = keyValue[i]; 
    let endDigit = parseInt(key.slice(-1)); 
    keyEnds.push(endDigit); 
}

console.log(KeyNumber);
console.log(String(keyEnds)); 

