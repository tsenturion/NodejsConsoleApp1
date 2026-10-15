const grades = [5, 4, 3, 5, 5, 2, 4];

let total = 0;
let excellentCount = 0;
let hasBadGrade = false;

for (const grade of grades) {
    total += grade;

    if (grade === 5) {
        excellentCount++;
    }

    if (grade === 2) {
        hasBadGrade = true;
    }
}

const average = total / grades.length;

console.log("Количество оценок:", grades.length);
console.log("Сумма оценок:", total);
console.log("Средний балл:", average.toFixed(2));
console.log("Количество пятёрок:", excellentCount);
console.log("Есть двойка:", hasBadGrade);