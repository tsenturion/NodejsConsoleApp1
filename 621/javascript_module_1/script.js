const inputValue = "25";
const amount = Number(inputValue);

if (Number.isFinite(amount)) {
    console.log(amount + 10);
} else {
    console.log("Введено некорректное число");
}