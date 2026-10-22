const user = {
    name: "Анна",
    age: 22,
    isActive: true
};

const json = JSON.stringify(user);

console.log(json);
// {"name":"Анна","age":22,"isActive":true}

console.log(typeof json); // string