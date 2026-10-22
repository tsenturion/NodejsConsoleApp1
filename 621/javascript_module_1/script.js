const json = '{"name":"Анна","age":22,"isActive":true}';

const user = JSON.parse(json);

console.log(user.name);     // Анна
console.log(user.age);      // 22
console.log(user.isActive); // true