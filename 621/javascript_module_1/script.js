function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function run() {
    console.log("Начало ожидания");

    await delay(2000);

    console.log("Ожидание завершено");
}

run();

console.log("Другой код продолжает работать");