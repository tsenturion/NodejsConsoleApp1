"use strict";

const user = {
    name: "Анна",

    getName() {
        return this.name;
    }
};

const anotherUser = {
    name: "Мария",
    getName: user.getName
};

console.log(user.getName());        // Анна
console.log(anotherUser.getName()); // Мария