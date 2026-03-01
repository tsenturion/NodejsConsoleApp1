"use strict";

/* =========================================================
   1) Создание массивов
   ========================================================= */

// Литерал массива — самый читаемый и распространённый способ создания.
const numbers = [1, 2, 3, 4, 5];
console.log("numbers:", numbers);

// Конструктор Array — создаёт массив с переданными элементами.
const numbers2 = new Array(1, 2, 3, 4, 5);
console.log("numbers2:", numbers2);

// Важно: если передать один числовой аргумент,
// создаётся массив заданной длины с пустыми слотами.
const emptySlots = new Array(5);
console.log("new Array(5):", emptySlots, "length =", emptySlots.length);

// Пустой массив с последующим добавлением элементов по индексам.
const arr = [];
arr[0] = "Первый";
arr[1] = "Второй";
console.log("arr:", arr);

/* =========================================================
   2) Доступ к элементам и свойство length
   ========================================================= */

const fruits = ["яблоко", "банан", "груша"];

console.log("fruits[0]:", fruits[0]);
console.log("fruits[2]:", fruits[2]);
console.log("fruits[10]:", fruits[10]); // несуществующий индекс → undefined

console.log("length:", fruits.length);

// Добавление элемента за пределами текущей длины увеличивает length.
fruits[5] = "манго";
console.log("После fruits[5] = 'манго':", fruits);
console.log("Новая длина:", fruits.length);

/* =========================================================
   3) Итерация по массивам
   ========================================================= */

console.log("Цикл for:");
for (let i = 0; i < fruits.length; i++) {
  console.log("index:", i, "value:", fruits[i]);
}

console.log("Цикл for...of:");
for (const fruit of fruits) {
  console.log("value:", fruit);
}

console.log("Метод forEach:");
fruits.forEach((fruit, index) => {
  console.log("index:", index, "value:", fruit);
});

/* =========================================================
   4) Методы добавления и удаления (мутируют массив)
   ========================================================= */

const modifiableFruits = ["яблоко", "банан"];

modifiableFruits.push("апельсин"); // добавляет в конец
console.log("После push:", modifiableFruits);

const last = modifiableFruits.pop(); // удаляет последний элемент
console.log("Удалён последний:", last);
console.log("После pop:", modifiableFruits);

modifiableFruits.unshift("киви"); // добавляет в начало
console.log("После unshift:", modifiableFruits);

const first = modifiableFruits.shift(); // удаляет первый элемент
console.log("Удалён первый:", first);
console.log("После shift:", modifiableFruits);

/* =========================================================
   5) Поиск и проверка элементов
   ========================================================= */

const searchFruits = ["яблоко", "банан", "груша", "банан"];

console.log("indexOf('банан'):", searchFruits.indexOf("банан"));
console.log("includes('груша'):", searchFruits.includes("груша"));
console.log("lastIndexOf('банан'):", searchFruits.lastIndexOf("банан"));

/* =========================================================
   6) Преобразование и фильтрация
   ========================================================= */

const baseNumbers = [1, 2, 3];

const doubled = baseNumbers.map(n => n * 2); // создаёт новый массив
console.log("map (doubled):", doubled);

const even = baseNumbers.filter(n => n % 2 === 0); // фильтрация
console.log("filter (even):", even);

const sum = baseNumbers.reduce((acc, n) => acc + n, 0); // свёртка
console.log("reduce (sum):", sum);

const letters = ["b", "a", "c"];
letters.sort(); // сортировка строк по Unicode
console.log("letters sorted:", letters);

const nums = [10, 2, 30];
nums.sort((a, b) => a - b); // корректная числовая сортировка
console.log("nums sorted:", nums);

/* =========================================================
   7) Соединение и разделение
   ========================================================= */

const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = arr1.concat(arr2); // создаёт новый массив
console.log("concat:", combined);

console.log("join:", searchFruits.join(", "));

const text = "яблоко,банан,груша";
const splitted = text.split(",");
console.log("split:", splitted);

/* =========================================================
   8) Копирование массивов
   ========================================================= */

const original = ["a", "b", "c"];

const sub = original.slice(1, 3); // копия части массива
console.log("slice:", sub);

const copy = [...original]; // поверхностная копия через spread
console.log("spread copy:", copy);

// Демонстрация, что это разные массивы
copy.push("d");
console.log("original:", original);
console.log("copy after push:", copy);

/* =========================================================
   9) Массивы и функции высшего порядка
   ========================================================= */

const numbersSet = [1, 2, 3, 4, 5];

const squares = numbersSet.map(n => n * n);
const evenNumbers = numbersSet.filter(n => n % 2 === 0);
const total = numbersSet.reduce((acc, n) => acc + n, 0);

console.log("squares:", squares);
console.log("evenNumbers:", evenNumbers);
console.log("total:", total);

/* =========================================================
   10) Проверка мутации vs немутации
   ========================================================= */

const base = [1, 2, 3];

const mapped = base.map(n => n * 10); // не меняет base
console.log("base после map:", base);
console.log("mapped:", mapped);

base.push(4); // изменяет base
console.log("base после push:", base);