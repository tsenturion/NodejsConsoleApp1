function numTest1(num: number) {
    for (let i = num; i >= 0; i--) {
        if (num % 2 === 0) {
            
            if (i % 2 === 0) {
                console.log(i);
            } 
        } else {
            
            if (i % 2 !== 0) {
                console.log(i);
            } 
        }
    }
}


numTest1(11);