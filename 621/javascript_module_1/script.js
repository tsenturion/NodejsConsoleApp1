const user = {
    name: "Мария",
    age: 21,
    password: "123456"
};

delete user.password;

console.log(user);
// { name: "Мария", age: 21 }