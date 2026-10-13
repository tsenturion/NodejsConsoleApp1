console.log("JavaScript выполняется");
console.log("Текущая среда предоставляет свои API");

if (typeof document !== "undefined") {
    console.log("Код выполняется в браузере");
} else {
    console.log("Код выполняется без браузерного DOM");
}