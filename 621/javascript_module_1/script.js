try {
    console.log(double(5));
} catch (error) {
    console.log(error.name); // ReferenceError
}

const double = number => number * 2;

console.log(double(5)); // 10