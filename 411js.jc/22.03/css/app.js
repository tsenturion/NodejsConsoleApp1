/*
  Код запускается только после полной готовности DOM.
  Это гарантирует, что все элементы страницы уже существуют,
  и jQuery сможет корректно найти их по селекторам.
*/
$(function () {
  console.log("jQuery подключена:", $);

  /*
    Функция resetPage возвращает странице исходное состояние.
    Она нужна для повторной демонстрации всех примеров
    с одной и той же стартовой точки.
  */
  function resetPage() {
    $("#box")
      .removeClass("active error")
      .css({
        color: "",
        backgroundColor: "",
        fontSize: "",
        borderColor: "",
        width: "",
        height: ""
      })
      .text("Блок для изменения стилей");

    $(".item")
      .removeClass("highlight")
      .css("fontSize", "")
      .each(function (index) {
        $(this).text("Элемент " + (index + 1));
      });

    $("#measureBox").css({
      width: "180px",
      height: "80px"
    });

    $("#positionBox").css({
      top: "40px",
      left: "60px"
    });

    $("#output").text("Состояние страницы сброшено.");
  }

  /*
    css("свойство", "значение") изменяет одно CSS-свойство.
    Здесь мы меняем цвет текста у элемента #box.
  */
  $("#setCssBtn").on("click", function () {
    $("#box").css("color", "red");

    $("#output").text(
      'Через css("color", "red") у #box изменён цвет текста.'
    );
  });

  /*
    css("свойство") без второго аргумента возвращает
    текущее вычисленное значение свойства.
  */
  $("#getCssBtn").on("click", function () {
    const colorValue = $("#box").css("color");

    $("#output").text(
      "Текущее значение свойства color у #box:\n" + colorValue
    );
  });

  /*
    В css() можно передать объект и изменить сразу несколько свойств.
    Обратите внимание: многословные CSS-свойства записываются в camelCase.
  */
  $("#setMultipleCssBtn").on("click", function () {
    $("#box").css({
      color: "white",
      backgroundColor: "black",
      fontSize: "20px",
      borderColor: "black"
    });

    $("#output").text(
      "Через css({ ... }) у #box изменены сразу несколько CSS-свойств."
    );
  });

  /*
    addClass() добавляет класс элементу.
    Класс active уже описан в CSS, поэтому элемент меняет внешний вид
    без прямой записи inline-стилей в JavaScript.
  */
  $("#addClassBtn").on("click", function () {
    $("#box").addClass("active");

    $("#output").text(
      'Через addClass("active") элементу #box добавлен класс active.'
    );
  });

  /*
    removeClass() удаляет класс у элемента.
  */
  $("#removeClassBtn").on("click", function () {
    $("#box").removeClass("active");

    $("#output").text(
      'Через removeClass("active") у #box удалён класс active.'
    );
  });

  /*
    toggleClass() переключает наличие класса.
    Если класс есть — удаляет его.
    Если класса нет — добавляет его.
  */
  $("#toggleClassBtn").on("click", function () {
    $("#box").toggleClass("active");

    $("#output").text(
      'Через toggleClass("active") состояние класса у #box переключено.'
    );
  });

  /*
    hasClass() проверяет, есть ли у элемента конкретный класс.
    Метод возвращает true или false.
  */
  $("#hasClassBtn").on("click", function () {
    const hasActiveClass = $("#box").hasClass("active");

    $("#output").text(
      "Результат hasClass('active') для #box:\n" + hasActiveClass
    );
  });

  /*
    Ещё один пример работы с классами.
    Вместо прямого изменения цвета через css()
    мы добавляем готовый класс error.
  */
  $("#addErrorBtn").on("click", function () {
    $("#box").removeClass("active").addClass("error");

    $("#output").text(
      "К элементу #box добавлен класс error.\n" +
      "Это более структурированный подход, чем большое количество прямых css-изменений."
    );
  });

  /*
    jQuery автоматически применяет методы ко всем найденным элементам.
    Здесь класс highlight добавляется всем элементам с классом .item.
  */
  $("#highlightItemsBtn").on("click", function () {
    $(".item").addClass("highlight");

    $("#output").text(
      "Все элементы с классом .item получили класс highlight."
    );
  });

  /*
    css() может принимать функцию.
    Для каждого элемента jQuery передаёт его индекс.
    Здесь каждому .item задаётся свой размер шрифта.
  */
  $("#fontSizeByFunctionBtn").on("click", function () {
    $(".item").css("fontSize", function (index) {
      return 14 + index * 4 + "px";
    });

    $("#output").text(
      "Через css(function) каждому элементу .item задан свой размер шрифта."
    );
  });

  /*
    width() без аргумента возвращает ширину элемента
    без padding и border.
  */
  $("#getWidthBtn").on("click", function () {
    const widthValue = $("#measureBox").width();

    $("#output").text(
      "width() для #measureBox:\n" + widthValue + "px"
    );
  });

  /*
    height() без аргумента возвращает высоту элемента
    без padding и border.
  */
  $("#getHeightBtn").on("click", function () {
    const heightValue = $("#measureBox").height();

    $("#output").text(
      "height() для #measureBox:\n" + heightValue + "px"
    );
  });

  /*
    innerWidth() возвращает ширину элемента вместе с padding,
    но без border.
  */
  $("#getInnerWidthBtn").on("click", function () {
    const innerWidthValue = $("#measureBox").innerWidth();

    $("#output").text(
      "innerWidth() для #measureBox:\n" + innerWidthValue + "px"
    );
  });

  /*
    outerWidth() возвращает ширину элемента вместе с padding и border.
  */
  $("#getOuterWidthBtn").on("click", function () {
    const outerWidthValue = $("#measureBox").outerWidth();

    $("#output").text(
      "outerWidth() для #measureBox:\n" + outerWidthValue + "px"
    );
  });

  /*
    width(300) устанавливает новую ширину элемента.
    Число будет воспринято как пиксели.
  */
  $("#setWidthBtn").on("click", function () {
    $("#measureBox").width(300);

    $("#output").text(
      "Через width(300) для #measureBox установлена ширина 300px."
    );
  });

  /*
    height(120) устанавливает новую высоту элемента.
  */
  $("#setHeightBtn").on("click", function () {
    $("#measureBox").height(120);

    $("#output").text(
      "Через height(120) для #measureBox установлена высота 120px."
    );
  });

  /*
    offset() возвращает координаты элемента относительно всей страницы.
    Обычно это объект с полями top и left.
  */
  $("#getOffsetBtn").on("click", function () {
    const offsetValue = $("#positionBox").offset();

    $("#output").text(
      "offset() для #positionBox:\n" +
      "top: " + offsetValue.top + "\n" +
      "left: " + offsetValue.left
    );
  });

  /*
    position() возвращает координаты элемента относительно
    ближайшего позиционированного родителя.
    В данном случае это контейнер .stage.
  */
  $("#getPositionBtn").on("click", function () {
    const positionValue = $("#positionBox").position();

    $("#output").text(
      "position() для #positionBox:\n" +
      "top: " + positionValue.top + "\n" +
      "left: " + positionValue.left
    );
  });

  /*
    Здесь мы изменяем координаты элемента через css(),
    потому что у него задано position: absolute.
  */
  $("#moveBoxBtn").on("click", function () {
    $("#positionBox").css({
      top: "90px",
      left: "180px"
    });

    $("#output").text(
      "Позиционированный блок сдвинут через изменение CSS-свойств top и left."
    );
  });

  /*
    Возвращаем страницу к исходному состоянию.
  */
  $("#resetBtn").on("click", function () {
    resetPage();
  });
});