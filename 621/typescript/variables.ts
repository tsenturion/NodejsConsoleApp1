type Result =
    | {
        success: true;
        data: string;
    }
    | {
        success: false;
        error: string;
    };

function processResult(result: Result): string {
    if (result.success) {
        return `Получены данные: ${result.data}`;
    }

    return `Ошибка: ${result.error}`;
}

const firstResult: Result = {
    success: true,
    data: "Информация загружена"
};

const secondResult: Result = {
    success: false,
    error: "Сервер недоступен"
};

console.log(processResult(firstResult));
console.log(processResult(secondResult));