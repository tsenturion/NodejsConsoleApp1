const user = {
    name: "Мария",
    age: undefined
};

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "age"));  // true
console.log(Object.hasOwn(user, "city")); // false