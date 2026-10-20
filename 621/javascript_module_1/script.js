const user1 = {
    name: "Алексей",
    age: 25
};

const user2 = user1;

user2.age = 30;

console.log(user1.age); // 30
console.log(user2.age); // 30