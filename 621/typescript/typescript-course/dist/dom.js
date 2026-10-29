const input = document.querySelector("#age");
const button = document.querySelector("#check");
const result = document.querySelector("#result");
if (!input || !button || !result) {
    throw new Error("Не найдены необходимые HTML-элементы");
}
button.addEventListener("click", () => {
    const age = Number(input.value);
    if (input.value.trim() === "" || !Number.isFinite(age)) {
        result.textContent = "Введите корректный возраст";
        return;
    }
    if (age >= 18) {
        result.textContent = "Доступ разрешён";
    }
    else {
        result.textContent = "Доступ запрещён";
    }
});
export {};
//# sourceMappingURL=dom.js.map