// =========================
// 1) Переменные: var / let / const
// =========================

// let — переменная, значение которой может меняться.
let age = 25;
age = 26; // повторное присваивание для let разрешено

// const — переменная, которой запрещено повторное присваивание.
const name = "Alex";
// name = "John"; // если раскомментировать, будет ошибка: Assignment to constant variable.

// var — историческая форма объявления переменных.
// В современном коде избегают из-за неочевидного поведения (hoisting и область видимости).
console.log("До присваивания var-переменной значение:", legacyVar); // выведет undefined из-за поднятия объявления (hoisting)
var legacyVar = "старый стиль var";
console.log("После присваивания var-переменной значение:", legacyVar);

// =========================
// 2) Типы данных (примитивы)
// =========================

// number: целые, дробные, отрицательные — всё один тип number.
let price = 99.99;
let count = 10;

// string: строки (одинарные, двойные, обратные кавычки).
let message = "Привет";
let title = "JavaScript";

// Шаблонная строка: выражение внутри ${...} вычисляется в момент формирования строки.
let result = `Результат: ${price}`;

// boolean: логический тип.
let isAdmin = true;
let isVisible = false;

// undefined: переменная объявлена, но значение не присвоено.
let data;

// null: осознанное «пустое значение».
let response = null;

// symbol: уникальный идентификатор (обычно нужен в продвинутых темах).
const uniqueId = Symbol("id");

// bigint: большие целые числа (пишутся с суффиксом n).
const bigNumber = 9007199254740991n + 2n;

// Печатаем типы и значения, чтобы видеть, что реально хранится в переменных.
console.log("\n--- Типы данных ---");
console.log("price:", price, "| typeof:", typeof price);
console.log("message:", message, "| typeof:", typeof message);
console.log("isAdmin:", isAdmin, "| typeof:", typeof isAdmin);
console.log("data:", data, "| typeof:", typeof data); // typeof undefined -> "undefined"
console.log("response:", response, "| typeof:", typeof response); // typeof null -> "object" (историческая особенность языка)
console.log("uniqueId:", uniqueId, "| typeof:", typeof uniqueId);
console.log("bigNumber:", bigNumber, "| typeof:", typeof bigNumber);

// =========================
// 3) Операторы
// =========================

// Арифметика: + - * / %
const sum = 10 + 5;
const difference = 10 - 5;
const product = 10 * 5;
const quotient = 10 / 5;
const remainder = 10 % 3;

console.log("\n--- Арифметика ---");
console.log("sum:", sum);
console.log("difference:", difference);
console.log("product:", product);
console.log("quotient:", quotient);
console.log("remainder:", remainder);

// Сравнение: > < >= <= == === != !==
console.log("\n--- Сравнение ---");

// == сравнивает с приведением типов (может давать неожиданные результаты).
console.log("5 == '5'  ->", 5 == "5"); // true (строка приводится к числу)

// === сравнивает и значение, и тип (предсказуемо).
console.log("5 === '5' ->", 5 === "5"); // false (типы разные)

// Рекомендуемая практика: использовать только строгие операторы === и !==.
console.log("10 !== 10 ->", 10 !== 10); // false
console.log("10 === 10 ->", 10 === 10); // true

// Логические операторы: && || !
console.log("\n--- Логика ---");

// Константы-границы вместо «магических чисел» — это часть хорошего стиля.
const ADULT_AGE = 18;
const RETIRE_AGE = 65;

// Условие вычисляется слева направо: возраст должен быть >= 18 и < 65.
let isAdult = age >= ADULT_AGE && age < RETIRE_AGE;

console.log("age:", age, "isAdult:", isAdult);

// Пример ||: если первое значение «ложноподобное», берётся второе.
const defaultTitle = title || "Без названия";
console.log("defaultTitle:", defaultTitle);

// Пример !: инверсия логического значения.
console.log("!isVisible ->", !isVisible);

// =========================
// 4) Неявное и явное приведение типов
// =========================

console.log("\n--- Приведение типов ---");

// Оператор + со строкой делает конкатенацию (склейку).
const concatExample = "5" + 1; // "51" (строка)
console.log("'5' + 1 ->", concatExample, "| typeof:", typeof concatExample);

// Оператор - работает как числовой: строка "5" приводится к числу 5.
const minusExample = "5" - 1; // 4 (число)
console.log("'5' - 1 ->", minusExample, "| typeof:", typeof minusExample);

// Явное приведение: мы сами контролируем, в какой тип переводим значение.
const asNumber = Number("5");
const asString = String(10);
const asBoolean = Boolean(1);

console.log("Number('5')  ->", asNumber, "| typeof:", typeof asNumber);
console.log("String(10)   ->", asString, "| typeof:", typeof asString);
console.log("Boolean(1)   ->", asBoolean, "| typeof:", typeof asBoolean);

// =========================
// 5) Итоговый мини-вывод
// =========================

console.log("\n--- Итог ---");
console.log("Переменные: let меняется, const не переназначается, var имеет поднятие объявления.");
console.log("Типы: number/string/boolean/null/undefined/symbol/bigint показаны на примерах.");
console.log("Сравнение: === и !== дают предсказуемость, == может «склеивать» типы.");
console.log("Приведение типов: '+' со строкой склеивает, '-' приводит к числам; лучше делать Number/String/Boolean явно.");