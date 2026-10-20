"use strict";

const user = {
    name: "Анна",

    getName() {
        return this.name;
    }
};

const getUserName = user.getName;

try {
    console.log(getUserName());
} catch (error) {
    console.log(error.name); // TypeError
}