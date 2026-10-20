const students = [
    { name: "Анна", grade: 5 },
    { name: "Иван", grade: 4 },
    { name: "Мария", grade: 5 },
    { name: "Олег", grade: 3 }
];

const excellentStudents = students
    .filter(student => student.grade === 5)
    .map(student => student.name);

console.log(excellentStudents);
// ["Анна", "Мария"]