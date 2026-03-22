/*
  Код запускается только после полной готовности DOM.
  Это гарантирует, что все элементы страницы уже существуют
  и jQuery сможет корректно найти их по селекторам.
*/
$(function () {
  console.log("jQuery подключена:", $);

  /*
    Функция resetPage возвращает основные элементы
    в исходное состояние для повторной демонстрации.
  */
  function resetPage() {
    $("#measureBox").css({
      width: "220px",
      height: "120px"
    });

    $("#positionBox").css({
      top: "40px",
      left: "60px"
    });

    $("#output").text("Состояние страницы сброшено.");
  }

  /*
    width() возвращает только ширину контента,
    без padding, border и margin.
  */
  $("#getWidthBtn").on("click", function () {
    const widthValue = $("#measureBox").width();

    $("#output").text(
      "width() для #measureBox:\n" + widthValue + "px\n" +
      "Это ширина только содержимого без padding, border и margin."
    );
  });

  /*
    height() возвращает только высоту контента,
    без padding, border и margin.
  */
  $("#getHeightBtn").on("click", function () {
    const heightValue = $("#measureBox").height();

    $("#output").text(
      "height() для #measureBox:\n" + heightValue + "px\n" +
      "Это высота только содержимого без padding, border и margin."
    );
  });

  /*
    innerWidth() возвращает ширину контента вместе с padding,
    но без border и margin.
  */
  $("#getInnerWidthBtn").on("click", function () {
    const innerWidthValue = $("#measureBox").innerWidth();

    $("#output").text(
      "innerWidth() для #measureBox:\n" + innerWidthValue + "px\n" +
      "Здесь уже учтён padding."
    );
  });

  /*
    innerHeight() возвращает высоту контента вместе с padding,
    но без border и margin.
  */
  $("#getInnerHeightBtn").on("click", function () {
    const innerHeightValue = $("#measureBox").innerHeight();

    $("#output").text(
      "innerHeight() для #measureBox:\n" + innerHeightValue + "px\n" +
      "Здесь учтён padding по вертикали."
    );
  });

  /*
    outerWidth() возвращает ширину с учётом padding и border,
    но без margin.
  */
  $("#getOuterWidthBtn").on("click", function () {
    const outerWidthValue = $("#measureBox").outerWidth();

    $("#output").text(
      "outerWidth() для #measureBox:\n" + outerWidthValue + "px\n" +
      "Здесь учтены content + padding + border."
    );
  });

  /*
    outerWidth(true) дополнительно включает margin.
  */
  $("#getOuterWidthMarginBtn").on("click", function () {
    const outerWidthMarginValue = $("#measureBox").outerWidth(true);

    $("#output").text(
      "outerWidth(true) для #measureBox:\n" + outerWidthMarginValue + "px\n" +
      "Здесь учтены content + padding + border + margin."
    );
  });

  /*
    outerHeight() возвращает высоту с учётом padding и border.
  */
  $("#getOuterHeightBtn").on("click", function () {
    const outerHeightValue = $("#measureBox").outerHeight();

    $("#output").text(
      "outerHeight() для #measureBox:\n" + outerHeightValue + "px\n" +
      "Здесь учтены content + padding + border."
    );
  });

  /*
    outerHeight(true) возвращает высоту с учётом margin.
  */
  $("#getOuterHeightMarginBtn").on("click", function () {
    const outerHeightMarginValue = $("#measureBox").outerHeight(true);

    $("#output").text(
      "outerHeight(true) для #measureBox:\n" + outerHeightMarginValue + "px\n" +
      "Здесь учтены content + padding + border + margin."
    );
  });

  /*
    width(300) устанавливает новую ширину элемента в пикселях.
  */
  $("#setWidthBtn").on("click", function () {
    $("#measureBox").width(300);

    $("#output").text(
      "Через width(300) для #measureBox установлена ширина 300px."
    );
  });

  /*
    height(180) устанавливает новую высоту элемента в пикселях.
  */
  $("#setHeightBtn").on("click", function () {
    $("#measureBox").height(180);

    $("#output").text(
      "Через height(180) для #measureBox установлена высота 180px."
    );
  });

  /*
    offset() возвращает координаты элемента относительно всей страницы.
    Результат — объект с полями top и left.
  */
  $("#getOffsetBtn").on("click", function () {
    const offsetValue = $("#positionBox").offset();

    $("#output").text(
      "offset() для #positionBox:\n" +
      "top: " + offsetValue.top + "\n" +
      "left: " + offsetValue.left + "\n\n" +
      "Это координаты элемента относительно всей страницы."
    );
  });

  /*
    position() возвращает координаты элемента относительно
    ближайшего позиционированного родителя.
    В нашем примере таким родителем является #stage,
    потому что у него задано position: relative.
  */
  $("#getPositionBtn").on("click", function () {
    const positionValue = $("#positionBox").position();

    $("#output").text(
      "position() для #positionBox:\n" +
      "top: " + positionValue.top + "\n" +
      "left: " + positionValue.left + "\n\n" +
      "Это координаты элемента внутри контейнера #stage."
    );
  });

  /*
    Здесь изменяются top и left у абсолютно позиционированного элемента.
    После этого его положение внутри контейнера меняется.
  */
  $("#moveBoxBtn").on("click", function () {
    $("#positionBox").css({
      top: "120px",
      left: "220px"
    });

    $("#output").text(
      "Блок #positionBox сдвинут через изменение CSS-свойств top и left."
    );
  });

  /*
    each() перебирает все элементы .item по одному.
    Для каждого элемента измеряем width() и формируем отчёт.
  */
  $("#eachWidthsBtn").on("click", function () {
    let report = [];

    $(".item").each(function (index) {
      const widthValue = $(this).width();

      report.push("Элемент " + (index + 1) + ": " + widthValue + "px");
    });

    $("#output").text(
      "Результат измерения всех .item через each():\n" + report.join("\n")
    );
  });

  /*
    scrollTop() у window возвращает количество пикселей,
    на которое страница прокручена по вертикали.
  */
  $("#getScrollTopBtn").on("click", function () {
    const scrollTopValue = $(window).scrollTop();

    $("#output").text(
      "scrollTop() для окна браузера:\n" + scrollTopValue + "px"
    );
  });

  /*
    scrollLeft() у window возвращает горизонтальную прокрутку.
    На обычной странице это часто 0, если нет горизонтального смещения.
  */
  $("#getScrollLeftBtn").on("click", function () {
    const scrollLeftValue = $(window).scrollLeft();

    $("#output").text(
      "scrollLeft() для окна браузера:\n" + scrollLeftValue + "px"
    );
  });

  /*
    scrollTop(0) прокручивает страницу в самый верх.
    Для совместимости часто используют одновременно html и body.
  */
  $("#scrollToTopBtn").on("click", function () {
    $("html, body").scrollTop(0);

    $("#output").text(
      "Страница прокручена вверх через scrollTop(0)."
    );
  });

  /*
    Практический пример:
    получаем вертикальную координату целевого элемента
    и плавно прокручиваем страницу к нему.
  */
  $("#scrollToTargetBtn").on("click", function () {
    const top = $("#target").offset().top;

    $("html, body").animate(
      {
        scrollTop: top
      },
      500
    );

    $("#output").text(
      "Страница плавно прокручивается к элементу #target.\n" +
      "Координата получена через offset().top."
    );
  });

  /*
    Возвращаем основные элементы в исходное состояние.
  */
  $("#resetBtn").on("click", function () {
    resetPage();
  });
});