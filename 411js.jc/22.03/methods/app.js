/*
  Весь код запускается только после полной готовности DOM.
  Это гарантирует, что jQuery сможет найти все элементы страницы.
*/
$(function () {
  console.log("jQuery подключена:", $);

  /*
    Функция resetPage возвращает странице исходное состояние.
    Она нужна, чтобы можно было много раз повторять примеры с одного и того же старта.
  */
  function resetPage() {
    $("#title").text("Исходный заголовок");

    $("#htmlBlock").html("Обычный текст внутри блока");

    $("#list").html(`
      <li class="item">Элемент 1</li>
      <li class="item" id="item2">Элемент 2</li>
      <li class="item">Элемент 3</li>
    `);

    $("#box").html("Этот блок можно очистить или полностью удалить.");

    /*
      Если элемент remove() был удалён, создаём его заново.
      Сначала проверяем, существует ли он в DOM.
    */
    if ($("#removeTarget").length === 0) {
      $(`<div id="removeTarget">Этот элемент будет удалён методом remove().</div>`)
        .insertAfter("#box");
    } else {
      $("#removeTarget").html("Этот элемент будет удалён методом remove().");
    }

    $("#userInput").val("");
    $("#result").text("Здесь будет показан результат работы с формой.");
    $("#output").text("Состояние страницы сброшено.");
  }

  /*
    text() с аргументом заменяет текстовое содержимое элемента.
    HTML-разметка в строке не будет интерпретироваться как HTML.
  */
  $("#setTextBtn").on("click", function () {
    $("#title").text("<b>Новый заголовок через text()</b>");

    $("#output").text(
      "text(): заголовок изменён.\n" +
      "Строка вставлена как обычный текст, а не как HTML-разметка."
    );
  });

  /*
    text() без аргумента возвращает текущий текст элемента.
  */
  $("#getTextBtn").on("click", function () {
    const textValue = $("#title").text();

    $("#output").text(
      "Получен текст из #title:\n" + textValue
    );
  });

  /*
    html() с аргументом вставляет HTML внутрь элемента.
    Разметка будет обработана браузером как настоящий HTML.
  */
  $("#setHtmlBtn").on("click", function () {
    $("#htmlBlock").html("<span class='marker'>Жирное и выделенное содержимое через html()</span>");

    $("#output").text(
      "html(): внутрь #htmlBlock вставлена HTML-разметка.\n" +
      "Теперь браузер интерпретирует тег <span> как элемент."
    );
  });

  /*
    html() без аргумента возвращает HTML-содержимое элемента.
  */
  $("#getHtmlBtn").on("click", function () {
    const htmlValue = $("#htmlBlock").html();

    $("#output").text(
      "Получено HTML-содержимое из #htmlBlock:\n" + htmlValue
    );
  });

  /*
    append() добавляет новое содержимое в конец выбранного элемента.
    Здесь новый li добавляется в конец списка.
  */
  $("#appendBtn").on("click", function () {
    $("#list").append("<li class='item'>Новый элемент в конце списка</li>");

    $("#output").text(
      "append(): в конец списка #list добавлен новый элемент."
    );
  });

  /*
    prepend() добавляет содержимое в начало выбранного элемента.
  */
  $("#prependBtn").on("click", function () {
    $("#list").prepend("<li class='item'>Новый элемент в начале списка</li>");

    $("#output").text(
      "prepend(): в начало списка #list добавлен новый элемент."
    );
  });

  /*
    before() вставляет содержимое перед выбранным элементом.
    Здесь новый li добавляется перед элементом #item2.
  */
  $("#beforeBtn").on("click", function () {
    $("#item2").before("<li class='item'>Элемент перед вторым пунктом</li>");

    $("#output").text(
      "before(): новый элемент вставлен перед #item2."
    );
  });

  /*
    after() вставляет содержимое после выбранного элемента.
  */
  $("#afterBtn").on("click", function () {
    $("#item2").after("<li class='item'>Элемент после второго пункта</li>");

    $("#output").text(
      "after(): новый элемент вставлен после #item2."
    );
  });

  /*
    Методы jQuery применяются ко всем найденным элементам.
    Здесь у всех элементов с классом .item меняется текст.
  */
  $("#changeAllItemsBtn").on("click", function () {
    $(".item").text("Общий текст для всех элементов");

    $("#output").text(
      "Все элементы с классом .item получили одинаковый текст."
    );
  });

  /*
    text() может принимать функцию.
    Для каждого элемента jQuery передаст индекс и старый текст.
  */
  $("#numberItemsBtn").on("click", function () {
    $("#list .item").text(function (index, oldText) {
      /*
        Возвращаем новое текстовое содержимое для каждого элемента.
        index — порядковый номер элемента в выборке.
        oldText — прежний текст конкретного элемента.
      */
      return index + ": " + oldText;
    });

    $("#output").text(
      "text(function): каждому элементу списка добавлен его индекс."
    );
  });

  /*
    empty() удаляет всё содержимое элемента,
    но сам элемент остаётся на странице.
  */
  $("#emptyBtn").on("click", function () {
    $("#box").empty();

    $("#output").text(
      "empty(): содержимое #box удалено, но сам элемент #box остался в DOM."
    );
  });

  /*
    remove() удаляет сам элемент вместе с его содержимым.
  */
  $("#removeBtn").on("click", function () {
    $("#removeTarget").remove();

    $("#output").text(
      "remove(): элемент #removeTarget полностью удалён со страницы."
    );
  });

  /*
    val() с аргументом устанавливает значение поля ввода.
  */
  $("#setValBtn").on("click", function () {
    $("#userInput").val("Новое значение через val()");

    $("#output").text(
      "val(): в текстовое поле установлено новое значение."
    );
  });

  /*
    val() без аргумента возвращает текущее значение поля.
  */
  $("#getValBtn").on("click", function () {
    const inputValue = $("#userInput").val();

    $("#output").text(
      "Текущее значение поля ввода:\n" + inputValue
    );
  });

  /*
    Практический пример:
    получаем значение из input и выводим его как текст в блок result.
    Используем text(), а не html(), чтобы безопасно выводить пользовательский ввод.
  */
  $("#showInputBtn").on("click", function () {
    const value = $("#userInput").val();
    $("#result").text(value);

    $("#output").text(
      "Значение из поля ввода получено через val() и выведено в #result через text()."
    );
  });

  /*
    Возврат страницы к начальному состоянию.
  */
  $("#resetBtn").on("click", function () {
    resetPage();
  });
});