function numTest(num: number) {
    if (num % 2 === 0) {
        for (let i = 0; i <= num; i++) {
            if (i % 2 === 0) {
                console.log(i);
            } 
        } 
    } else {
        for (let i = 0; i <= num; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            } 
        } 
    }
}

numTest(11);