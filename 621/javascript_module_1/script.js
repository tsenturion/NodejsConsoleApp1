const value = Number("abc");

if (Number.isNaN(value)) {
    console.log("Не удалось получить число");
} else {
    console.log("Получено число:", value);
}