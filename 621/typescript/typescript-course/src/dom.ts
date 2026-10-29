const input = document.querySelector<HTMLInputElement>("#age");

const button = document.querySelector<HTMLButtonElement>("#check");

const result = document.querySelector<HTMLParagraphElement>("#result");

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
    } else {
        result.textContent = "Доступ запрещён";
    }
});