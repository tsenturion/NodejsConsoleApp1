$(function () {

  /*
    Выпадающее меню через slideToggle
  */
  $("#menuBtn").on("click", function () {
    $("#menu").slideToggle(300);
  });

  /*
    Аккордеон
    Закрываем все и открываем только текущий
  */
  $(".accordion-title").on("click", function () {
    $(".accordion-content").slideUp(300);
    $(this).next().slideDown(300);
  });

  /*
    Вкладки
  */
  $(".tab-button").on("click", function () {
    const index = $(this).index();

    $(".tab-button").removeClass("active");
    $(this).addClass("active");

    $(".tab-content").hide();
    $(".tab-content").eq(index).show();
  });

  /*
    Модальное окно
  */
  $("#openModal").on("click", function () {
    $("#modal").fadeIn(300);
  });

  $("#closeModal").on("click", function () {
    $("#modal").fadeOut(300);
  });

  /*
    Закрытие по фону
  */
  $("#modal").on("click", function (e) {
    if ($(e.target).is("#modal")) {
      $(this).fadeOut(300);
    }
  });

  /*
    Tooltip
  */
  $(".tooltip").on("mouseenter", function () {
    $(this).find(".tooltip-text").fadeIn(200);
  });

  $(".tooltip").on("mouseleave", function () {
    $(this).find(".tooltip-text").fadeOut(200);
  });

  /*
    Активный элемент меню
  */
  $(".menu-item").on("click", function () {
    $(".menu-item").removeClass("active");
    $(this).addClass("active");
  });

  /*
    Пример цепочки эффектов
  */
  $(".menu-item").on("dblclick", function () {
    $(this)
      .fadeOut(100)
      .fadeIn(100);
  });

});