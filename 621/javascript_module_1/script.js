const numbers = [10, 15, 20, 25, 30];

const target = 25;
let found = false;

for (const number of numbers) {
    if (number === target) {
        found = true;
        break;
    }
}

console.log("Число найдено:", found);