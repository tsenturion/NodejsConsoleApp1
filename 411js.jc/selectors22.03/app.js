$(function () {
  console.log("jQuery готова:", $);

  /*
    СЕЛЕКТОР ПО ID
    Выбираем один конкретный элемент.
  */
  $("#idSelector").on("click", function () {
    $("#header").text("Изменено через селектор #id");

    $("#output").text("Использован селектор по id (#header)");
  });

  /*
    СЕЛЕКТОР ПО КЛАССУ
    Выбираем сразу несколько элементов.
  */
  $("#classSelector").on("click", function () {
    $(".box").addClass("highlight");

    $("#output").text("Все элементы с классом .box были изменены");
  });

  /*
    СЕЛЕКТОР ПО ТЕГУ
    Воздействуем на все элементы определённого типа.
  */
  $("#tagSelector").on("click", function () {
    $("p").text("Все абзацы изменены через селектор по тегу");

    $("#output").text("Использован селектор по тегу (p)");
  });

  /*
    ВЛОЖЕННЫЙ СЕЛЕКТОР
    Находим элементы внутри других элементов.
  */
  $("#nestedSelector").on("click", function () {
    $("#menu li.active a").text("Выбрано");

    $("#output").text("Изменены ссылки внутри активного пункта меню");
  });

  /*
    ФИЛЬТРЫ
    Работаем с индексами элементов.
  */
  $("#filterSelector").on("click", function () {
    $("li:first").addClass("highlight");
    $("li:last").addClass("highlight");
    $("li:eq(1)").text("Второй элемент изменён");

    $("#output").text("Использованы фильтры :first, :last, :eq()");
  });

  /*
    АТРИБУТНЫЕ СЕЛЕКТОРЫ
    Выбор элементов по их атрибутам.
  */
  $("#attrSelector").on("click", function () {
    $("input[type='text']").val("Изменено через селектор");

    $("#output").text("Изменено текстовое поле через атрибутный селектор");
  });

  /*
    СБРОС СОСТОЯНИЯ
    Возвращаем страницу к исходному виду.
  */
  $("#reset").on("click", function () {
    $("#header").text("Пример работы CSS-селекторов");

    $(".box").removeClass("highlight");

    $("p").text(function (index) {
      return "Абзац " + (index + 1);
    });

    $("#menu li a").each(function (index) {
      const texts = ["Главная", "Каталог", "Контакты"];
      $(this).text(texts[index]);
    });

    $("li").removeClass("highlight");

    $("input[type='text']").val("Текстовое поле");

    $("#output").text("Состояние сброшено");
  });
});