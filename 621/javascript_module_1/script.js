localStorage.setItem("age", 25);
localStorage.setItem("isActive", true);

const age = localStorage.getItem("age");
const isActive = localStorage.getItem("isActive");

console.log(age);      // "25"
console.log(isActive); // "true"

console.log(typeof age);      // string
console.log(typeof isActive); // string