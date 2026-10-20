const a = { value: 10 };
const b = { value: 10 };
const c = a;

console.log(a === b); // false
console.log(a === c); // true