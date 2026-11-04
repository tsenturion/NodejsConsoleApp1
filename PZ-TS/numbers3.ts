function numTest3(rate: number) {
    const target = 200; 
    let amount = 100; 
    let years = 0;

    while (amount < target) {
        amount += amount * (rate / 100); 
        years++;
    }

    return years;
}


const res = numTest3(45);
console.log(res);