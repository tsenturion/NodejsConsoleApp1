"use strict";

/* =========================================================
   1) Создание объектов
   ========================================================= */

// Литерал объекта — основной способ создания.
const user = {
  name: "Иван",
  age: 25,
  isAdmin: true
};

console.log("user:", user);

// Создание через конструктор Object.
const user2 = new Object();
user2.name = "Анна";
user2.age = 30;

console.log("user2:", user2);

/* =========================================================
   2) Доступ к свойствам
   ========================================================= */

// Доступ через точку — когда ключ известен заранее.
console.log("user.name:", user.name);
console.log("user.age:", user.age);

// Доступ через скобки — когда ключ хранится в переменной
// или содержит специальные символы.
console.log('user["isAdmin"]:', user["isAdmin"]);

const key = "name";
console.log("user[key]:", user[key]);

/* =========================================================
   3) Добавление, изменение, удаление
   ========================================================= */

// Добавление нового свойства.
user.email = "ivan@example.com";
console.log("После добавления email:", user);

// Изменение существующего свойства.
user.age = 26;
console.log("После изменения age:", user);

// Удаление свойства.
delete user.isAdmin;
console.log("После удаления isAdmin:", user);

/* =========================================================
   4) Проверка наличия свойства
   ========================================================= */

// Оператор in проверяет наличие ключа в объекте.
console.log('"name" in user:', "name" in user);
console.log('"isAdmin" in user:', "isAdmin" in user);

// Проверка через undefined менее надёжна,
// если значение свойства может быть undefined.
console.log("user.email !== undefined:", user.email !== undefined);

/* =========================================================
   5) Перебор свойств
   ========================================================= */

console.log("for...in:");
for (let prop in user) {
  // Проверяем только собственные свойства объекта.
  if (user.hasOwnProperty(prop)) {
    console.log(prop, user[prop]);
  }
}

// Object.keys — возвращает массив ключей.
console.log("Object.keys:", Object.keys(user));

// Object.values — возвращает массив значений.
console.log("Object.values:", Object.values(user));

// Object.entries — возвращает массив пар [ключ, значение].
console.log("Object.entries:", Object.entries(user));

/* =========================================================
   6) Вложенные объекты
   ========================================================= */

const userWithAddress = {
  name: "Иван",
  address: {
    city: "Москва",
    street: "Ленина"
  }
};

console.log("userWithAddress.address.city:",
  userWithAddress.address.city);

/* =========================================================
   7) Методы объектов и this
   ========================================================= */

const userWithMethod = {
  name: "Иван",
  sayHello: function() {
    // this ссылается на объект, который вызвал метод.
    console.log("Привет, меня зовут " + this.name);
  }
};

userWithMethod.sayHello();

// Краткий синтаксис метода (ES6).
const userShortMethod = {
  name: "Анна",
  sayHello() {
    console.log("Привет, меня зовут " + this.name);
  }
};

userShortMethod.sayHello();

/* =========================================================
   8) Динамические и вычисляемые ключи
   ========================================================= */

const dynamicKey = "phone";
user[dynamicKey] = "+7 999 123-45-67";
console.log("После динамического добавления:", user);

// Вычисляемый ключ при создании объекта.
const propName = "city";
const dynamicObject = {
  name: "Иван",
  [propName]: "Москва"
};

console.log("dynamicObject:", dynamicObject);

/* =========================================================
   9) Object.assign и spread
   ========================================================= */

const userA = { name: "Иван", age: 25 };
const userB = { email: "ivan@example.com" };

// Object.assign копирует свойства в новый объект.
const merged = Object.assign({}, userA, userB);
console.log("merged (assign):", merged);

// Spread создаёт новый объект и копирует свойства.
const merged2 = { ...userA, ...userB };
console.log("merged2 (spread):", merged2);

/* =========================================================
   10) Деструктуризация
   ========================================================= */

const sampleUser = { name: "Олег", age: 40 };

const { name, age } = sampleUser;
console.log("Деструктуризация name:", name);
console.log("Деструктуризация age:", age);

// Значение по умолчанию.
const { city = "Не указан" } = sampleUser;
console.log("city по умолчанию:", city);

// Деструктуризация в параметрах функции.
function greet({ name, age }) {
  console.log(`Привет, ${name}, тебе ${age} лет`);
}

greet(sampleUser);

/* =========================================================
   11) Демонстрация, что объекты — это ссылки
   ========================================================= */

const original = { a: 1 };
const reference = original; // копируется ссылка, не объект

reference.a = 100;

console.log("original после изменения reference:", original);
console.log("reference:", reference);

// Поверхностная копия через spread.
const copy = { ...original };
copy.a = 200;

console.log("original после изменения copy:", original);
console.log("copy:", copy);