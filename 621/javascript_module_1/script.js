function getNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(25);
        }, 1000);
    });
}

async function calculate() {
    const number = await getNumber();

    console.log(number * 2);
}

calculate();