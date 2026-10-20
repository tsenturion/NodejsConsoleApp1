function example() {
    try {
        console.log(number);
    } catch (error) {
        console.log(error.name); // ReferenceError
    }

    let number = 10;

    console.log(number); // 10
}

example();