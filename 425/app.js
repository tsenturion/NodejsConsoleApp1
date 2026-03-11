const fs = require('fs');

console.log("начало");

fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Ошибка при чтении файла:", err);
        return;
    }
    console.log("Содержимое файла:", data);
});

console.log("конец программы");
