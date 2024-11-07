function numTest2(num: number){
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            console.log("Делиться " + i);
        }
    }
}

numTest2(18);