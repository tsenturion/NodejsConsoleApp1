const command = "start";

switch (command) {
    case "start":
        console.log("Запуск программы");
        break;
    case "stop":
        console.log("Остановка программы");
        break;
    case "restart":
        console.log("Перезапуск программы");
        break;
    default:
        console.log("Неизвестная команда");
}