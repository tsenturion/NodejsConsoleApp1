const names = ["Яна", "Анна", "Олег", "Борис"];

names.sort((a, b) => a.localeCompare(b, "ru"));

console.log(names);
// ["Анна", "Борис", "Олег", "Яна"]