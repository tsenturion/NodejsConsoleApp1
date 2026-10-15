const grades = [4, 5, 3, 5, 4, 2];

let maxGrade = grades[0];

for (const grade of grades) {
    if (grade > maxGrade) {
        maxGrade = grade;
    }
}

console.log("Максимальная оценка:", maxGrade);