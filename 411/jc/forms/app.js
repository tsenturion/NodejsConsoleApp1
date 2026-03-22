$(function () {

  console.log("jQuery подключена:", $);

  /*
    Удаление ошибок при вводе
  */
  $("input, textarea").on("input", function () {
    $(this).removeClass("error");
    $(this).next(".error-text").text("");
  });

  /*
    Событие change (select)
  */
  $("#category").on("change", function () {
    $(this).removeClass("error");
    $("#categoryError").text("");
  });

  /*
    Обработка submit формы
  */
  $("#form").on("submit", function (e) {

    e.preventDefault(); // отменяем отправку

    let valid = true;

    /*
      Получаем значения
    */
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    const category = $("#category").val();
    const gender = $("input[name='gender']:checked").val();
    const agree = $("#agree").prop("checked");

    /*
      Проверка имени
    */
    if (name === "") {
      valid = false;
      $("#name").addClass("error");
      $("#nameError").text("Введите имя");
    }

    /*
      Проверка email
    */
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!pattern.test(email)) {
      valid = false;
      $("#email").addClass("error");
      $("#emailError").text("Некорректный email");
    }

    /*
      Проверка select
    */
    if (category === "") {
      valid = false;
      $("#category").addClass("error");
      $("#categoryError").text("Выберите категорию");
    }

    /*
      Проверка checkbox
    */
    if (!agree) {
      valid = false;
      $("#agreeError").text("Подтвердите согласие");
    }

    /*
      Если всё валидно — выводим результат
    */
    if (valid) {
      $("#result").html(`
        <b>Имя:</b> ${name}<br>
        <b>Email:</b> ${email}<br>
        <b>Сообщение:</b> ${message}<br>
        <b>Категория:</b> ${category}<br>
        <b>Пол:</b> ${gender || "не выбран"}
      `);
    }
  });

  /*
    Кнопка сброса формы
  */
  $("#resetBtn").on("click", function () {

    $("#form")[0].reset();

    $("input, textarea, select").removeClass("error");
    $(".error-text").text("");

    $("#result").text("Форма сброшена");
  });

});