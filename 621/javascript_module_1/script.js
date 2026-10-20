function checkAccess() {
    if (true) {
        let a = 10;
        const b = 20;

        console.log(a); // 10
        console.log(b); // 20
    }

    try {
        console.log(a);
    } catch (error) {
        console.log(error.name); // ReferenceError
    }
}

checkAccess();