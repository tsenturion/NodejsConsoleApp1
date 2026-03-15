$(function () {
  console.log("Локальная версия jQuery загружена:", $);

  $("#testButton").on("click", function () {
    $("#title").text("Локальное подключение работает");
    $("#message").text("Файл jquery.js был успешно найден и загружен браузером.");
  });
});