const user = {
    name: "Анна",
    age: 22
};

const updatedUser = {
    ...user,
    city: "Москва"
};

console.log(updatedUser);
// { name: "Анна", age: 22, city: "Москва" }