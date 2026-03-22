/*
  Код запускается только после полной готовности DOM.
  Это гарантирует, что все элементы уже существуют на странице,
  и jQuery сможет корректно найти их по селекторам.
*/
$(function () {
  console.log("jQuery подключена:", $);

  /*
    Функция updateCheckboxState выводит текущее состояние чекбокса
    сразу через два подхода: attr() и prop().
    Это помогает наглядно увидеть разницу между HTML-атрибутом
    и текущим DOM-свойством элемента.
  */
  function updateCheckboxState() {
    const checkedAttr = $("#agreeCheckbox").attr("checked");
    const checkedProp = $("#agreeCheckbox").prop("checked");

    $("#checkboxState").text(
      'attr("checked"): ' + checkedAttr + ' | prop("checked"): ' + checkedProp
    );
  }

  /*
    Функция resetPage возвращает странице исходное состояние.
    Это позволяет много раз повторять демонстрацию с одинаковой стартовой точки.
  */
  function resetPage() {
    $("#mainLink")
      .attr("href", "https://example.com")
      .attr("target", "_blank")
      .attr("title", "")
      .removeClass("external")
      .text("Открыть Example");

    $("#image").attr({
      src: "https://via.placeholder.com/220x120?text=Старое+изображение",
      alt: "Старое изображение"
    });

    /*
      Для корректной демонстрации разницы между attr() и prop()
      мы возвращаем HTML-атрибут checked.
    */
    $("#agreeCheckbox").attr("checked", "checked");

    /*
      И отдельно возвращаем текущее свойство checked в true.
      Это текущее реальное состояние чекбокса.
    */
    $("#agreeCheckbox").prop("checked", true);

    /*
      Удаляем внутреннее кешированное значение data,
      чтобы пример снова начинался с исходного HTML data-id="123".
    */
    $("#productCard").removeData("id");

    /*
      Возвращаем исходный HTML-атрибут data-id.
    */
    $("#productCard").attr("data-id", "123");

    $("#output").text("Состояние страницы сброшено.");
    updateCheckboxState();
  }

  /*
    attr() без второго аргумента возвращает значение атрибута.
    Если элементов несколько, возвращается значение атрибута первого из них.
  */
  $("#getHrefBtn").on("click", function () {
    const hrefValue = $("#mainLink").attr("href");

    $("#output").text(
      'Получен атрибут href у ссылки #mainLink:\n' + hrefValue
    );
  });

  /*
    attr() со вторым аргументом устанавливает новое значение атрибута.
    Здесь ссылка начинает вести на другой адрес.
  */
  $("#setHrefBtn").on("click", function () {
    $("#mainLink").attr("href", "https://google.com");

    $("#output").text(
      'Атрибут href у #mainLink изменён на "https://google.com".'
    );
  });

  /*
    В attr() можно передать объект.
    Тогда несколько атрибутов устанавливаются за один вызов метода.
  */
  $("#setMultipleAttrsBtn").on("click", function () {
    $("#mainLink")
      .attr({
        href: "https://openai.com",
        target: "_blank",
        title: "Переход на новый адрес"
      })
      .addClass("external")
      .text("Открыть новый сайт");

    $("#output").text(
      "Ссылке заданы сразу несколько атрибутов через attr({ ... }).\n" +
      "Также к ссылке добавлен класс external."
    );
  });

  /*
    removeAttr() удаляет HTML-атрибут у выбранного элемента.
    Здесь мы удаляем target, поэтому ссылка перестаёт открываться в новой вкладке.
  */
  $("#removeTargetBtn").on("click", function () {
    $("#mainLink").removeAttr("target");

    $("#output").text(
      'Атрибут target удалён у #mainLink через removeAttr("target").'
    );
  });

  /*
    Здесь меняем атрибуты src и alt у изображения.
    Браузер загружает новое изображение, потому что изменился адрес в src.
  */
  $("#changeImageBtn").on("click", function () {
    $("#image").attr({
      src: "https://via.placeholder.com/220x120?text=Новое+изображение",
      alt: "Новое изображение"
    });

    $("#output").text(
      "У изображения изменены атрибуты src и alt."
    );
  });

  /*
    attr() может принимать функцию.
    jQuery передаёт в неё индекс элемента и текущее значение атрибута.
    Здесь это используется для генерации нового alt-текста.
  */
  $("#setAltByFunctionBtn").on("click", function () {
    $("#image").attr("alt", function (index, oldValue) {
      return "Изображение " + index + " (старое значение: " + oldValue + ")";
    });

    $("#output").text(
      "Новый alt у изображения создан через функцию в attr()."
    );
  });

  /*
    Получаем именно HTML-атрибут checked.
    Он отражает то, что было указано в разметке или установлено через attr().
  */
  $("#getCheckedAttrBtn").on("click", function () {
    const value = $("#agreeCheckbox").attr("checked");

    $("#output").text(
      'Результат attr("checked"):\n' + value
    );

    updateCheckboxState();
  });

  /*
    Получаем текущее DOM-свойство checked.
    Оно показывает реальное текущее состояние чекбокса.
  */
  $("#getCheckedPropBtn").on("click", function () {
    const value = $("#agreeCheckbox").prop("checked");

    $("#output").text(
      'Результат prop("checked"):\n' + value
    );

    updateCheckboxState();
  });

  /*
    prop("checked", true) включает чекбокс.
    Для логических состояний формы использовать prop() правильнее, чем attr().
  */
  $("#checkBtn").on("click", function () {
    $("#agreeCheckbox").prop("checked", true);

    $("#output").text(
      'Чекбокс включён через prop("checked", true).'
    );

    updateCheckboxState();
  });

  /*
    prop("checked", false) снимает галочку.
    Это изменяет текущее состояние элемента.
  */
  $("#uncheckBtn").on("click", function () {
    $("#agreeCheckbox").prop("checked", false);

    $("#output").text(
      'Чекбокс выключен через prop("checked", false).'
    );

    updateCheckboxState();
  });

  /*
    data() работает с data-* атрибутами как с пользовательскими данными.
    Здесь мы читаем данные из элемента.
  */
  $("#getDataBtn").on("click", function () {
    const id = $("#productCard").data("id");
    const category = $("#productCard").data("category");

    $("#output").text(
      'Получены данные через data():\n' +
      'id = ' + id + '\n' +
      'category = ' + category
    );
  });

  /*
    data("id", ...) изменяет значение во внутреннем кеше jQuery.
    Это важно: новое значение может не совпасть с HTML-атрибутом data-id,
    если отдельно не изменить сам атрибут через attr().
  */
  $("#setDataBtn").on("click", function () {
    $("#productCard").data("id", 456);

    $("#output").text(
      'Через data("id", 456) изменено внутреннее значение data-id.\n' +
      "При этом HTML-атрибут data-id в разметке может остаться прежним."
    );
  });

  /*
    attr("data-id") читает именно HTML-атрибут из разметки.
    Это позволяет сравнить значение attr() и data() после изменения через data().
  */
  $("#getDataAttrBtn").on("click", function () {
    const value = $("#productCard").attr("data-id");
    const dataValue = $("#productCard").data("id");

    $("#output").text(
      'Получен HTML-атрибут через attr("data-id"): ' + value + '\n' +
      'Текущее значение через data("id"): ' + dataValue
    );
  });

  /*
    Возвращаем страницу к исходному виду.
  */
  $("#resetBtn").on("click", function () {
    resetPage();
  });

  /*
    Сразу показываем начальное состояние чекбокса после загрузки страницы.
  */
  updateCheckboxState();
});