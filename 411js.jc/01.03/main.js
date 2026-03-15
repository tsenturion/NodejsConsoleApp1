async function getData() {
    return 'Данные получены';
}

async function example() {
    const result = await getData();
    console.log(result);
}

async function example() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

