const enteredAge = "18";

console.log(enteredAge == 18);
console.log(enteredAge === 18);

const age = Number(enteredAge);

if (age >= 18) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}