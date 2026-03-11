function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function finish() {
    console.log("Nice to meet you!");
}

greet("Alice", finish);