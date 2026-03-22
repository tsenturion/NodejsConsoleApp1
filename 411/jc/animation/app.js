$(function () {
  console.log("jQuery подключена:", $);

  /*
    hide() скрывает элемент мгновенно (display: none)
  */
  $("#hideBtn").on("click", function () {
    $("#box").hide();
    $("#output").text("hide(): элемент скрыт мгновенно");
  });

  /*
    show() делает элемент видимым
  */
  $("#showBtn").on("click", function () {
    $("#box").show();
    $("#output").text("show(): элемент показан");
  });

  /*
    toggle() переключает состояние
  */
  $("#toggleBtn").on("click", function () {
    $("#box").toggle();
    $("#output").text("toggle(): состояние переключено");
  });

  /*
    fadeOut() — плавное исчезновение
  */
  $("#fadeOutBtn").on("click", function () {
    $("#fadeBox").fadeOut(500);
    $("#output").text("fadeOut(): плавное скрытие");
  });

  /*
    fadeIn() — плавное появление
  */
  $("#fadeInBtn").on("click", function () {
    $("#fadeBox").fadeIn(500);
    $("#output").text("fadeIn(): плавное появление");
  });

  /*
    fadeToggle() — переключение
  */
  $("#fadeToggleBtn").on("click", function () {
    $("#fadeBox").fadeToggle(500);
    $("#output").text("fadeToggle(): переключение");
  });

  /*
    fadeTo() — изменение прозрачности
  */
  $("#fadeToBtn").on("click", function () {
    $("#fadeBox").fadeTo(500, 0.5);
    $("#output").text("fadeTo(): прозрачность 0.5");
  });

  /*
    slideToggle() — раскрытие / скрытие
  */
  $("#slideToggleBtn").on("click", function () {
    $("#panel").slideToggle(400);
    $("#output").text("slideToggle(): панель переключена");
  });

  /*
    Цепочка анимаций (выполняются последовательно)
  */
  $("#chainBtn").on("click", function () {
    $("#chainBox")
      .fadeOut(300)
      .fadeIn(300)
      .slideUp(300)
      .slideDown(300);

    $("#output").text("Цепочка: fade → fade → slide → slide");
  });

  /*
    Последовательное появление через delay()
  */
  $("#showItemsBtn").on("click", function () {
    $(".item").each(function (index) {
      $(this)
        .delay(index * 200)
        .fadeIn(300);
    });

    $("#output").text("Элементы появляются по очереди");
  });

  /*
    Запуск анимации
  */
  $("#startAnimBtn").on("click", function () {
    $("#stopBox")
      .animate({ width: "300px" }, 1000)
      .animate({ width: "200px" }, 1000);

    $("#output").text("Анимация запущена");
  });

  /*
    stop() останавливает анимацию
  */
  $("#stopAnimBtn").on("click", function () {
    $("#stopBox").stop();
    $("#output").text("Анимация остановлена через stop()");
  });

  /*
    Комбинирование эффекта и класса
  */
  $("#comboBtn").on("click", function () {
    $("#comboBox")
      .fadeToggle(300)
      .toggleClass("active");

    $("#output").text("Комбинация: fadeToggle + toggleClass");
  });
});