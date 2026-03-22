/*
  Код запускается только после полной готовности DOM.
  Это гарантирует, что все элементы страницы уже существуют
  и jQuery сможет корректно назначить обработчики событий.
*/
$(function () {
  console.log("jQuery подключена:", $);

  /*
    Счётчик для динамически добавляемых элементов списка.
    Он нужен, чтобы новые элементы получали уникальный номер.
  */
  let itemCounter = 3;

  /*
    Отдельная функция-обработчик для главной кнопки.
    Мы выносим её в переменную, чтобы потом можно было
    корректно удалить её через off().
  */
  function mainButtonClickHandler(event) {
    $("#output").text(
      "Сработало событие click на #mainButton.\n" +
      "Тип события: " + event.type
    );
  }

  /*
    Назначаем обработчик click через .on().
    При клике будет вызвана функция mainButtonClickHandler.
  */
  $("#mainButton").on("click", mainButtonClickHandler);

  /*
    off() удаляет ранее назначенный обработчик.
    Здесь мы удаляем обработчик клика у #mainButton.
  */
  $("#removeMainHandlerButton").on("click", function () {
    $("#mainButton").off("click", mainButtonClickHandler);

    $("#output").text(
      "Обработчик click у #mainButton удалён через off()."
    );
  });

  /*
    preventDefault() отменяет стандартное действие браузера.
    Здесь ссылка не будет открывать новый адрес.
  */
  $("#demoLink").on("click", function (event) {
    event.preventDefault();

    $("#output").text(
      "Стандартное поведение ссылки отменено через preventDefault().\n" +
      "Переход по адресу не выполнен."
    );
  });

  /*
    Делегирование событий:
    обработчик click назначается на родительский элемент #itemList,
    а второй аргумент '.item' означает, что реагировать нужно
    только на дочерние элементы с классом .item.
    Это работает и для элементов, которые будут добавлены позже.
  */
  $("#itemList").on("click", ".item", function () {
    /*
      Сначала снимаем класс active у всех элементов списка,
      затем добавляем его только тому элементу, по которому кликнули.
    */
    $("#itemList .item").removeClass("active");
    $(this).addClass("active");

    $("#output").text(
      "Клик обработан у элемента списка через делегирование событий.\n" +
      "Активным стал: " + $(this).text()
    );
  });

  /*
    Кнопка добавляет новый элемент в список.
    Обработчик click у нового элемента отдельно не назначается,
    потому что делегирование уже настроено на #itemList.
  */
  $("#addItemButton").on("click", function () {
    itemCounter += 1;

    $("#itemList").append(
      `<li class="item">Элемент ${itemCounter}</li>`
    );

    $("#output").text(
      "В список добавлен новый элемент.\n" +
      "Он тоже будет реагировать на click благодаря делегированию."
    );
  });

  /*
    mouseenter срабатывает в момент входа курсора в элемент.
    Здесь мы добавляем класс hover, чтобы изменить внешний вид блока.
  */
  $("#hoverBox").on("mouseenter", function () {
    $(this).addClass("hover");

    $("#output").text(
      "Сработало событие mouseenter.\n" +
      "К блоку #hoverBox добавлен класс hover."
    );
  });

  /*
    mouseleave срабатывает, когда курсор покидает элемент.
    Здесь мы убираем класс hover.
  */
  $("#hoverBox").on("mouseleave", function () {
    $(this).removeClass("hover");

    $("#output").text(
      "Сработало событие mouseleave.\n" +
      "У блока #hoverBox удалён класс hover."
    );
  });

  /*
    one() назначает обработчик, который выполнится только один раз.
    После первого клика jQuery автоматически удаляет этот обработчик.
  */
  $("#oneTimeButton").one("click", function () {
    $("#output").text(
      "Обработчик one() выполнился.\n" +
      "При следующем клике этот код уже не сработает."
    );
  });

  /*
    keydown реагирует на нажатие клавиши.
    Объект event содержит информацию о событии, в том числе event.key.
  */
  $("#keyboardInput").on("keydown", function (event) {
    $("#keyDisplay").text(
      "Нажатая клавиша: " + event.key
    );

    $("#output").text(
      "Сработало событие keydown.\n" +
      "event.key = " + event.key
    );
  });

  /*
    submit срабатывает при отправке формы.
    preventDefault() здесь нужен, чтобы браузер не перезагрузил страницу
    и мы могли показать результат прямо в интерфейсе.
  */
  $("#demoForm").on("submit", function (event) {
    event.preventDefault();

    const name = $("#nameInput").val().trim();

    $("#output").text(
      "Сработало событие submit.\n" +
      "Форма не отправлена на сервер, потому что вызван preventDefault().\n" +
      "Введённое имя: " + (name || "поле пустое")
    );
  });

  /*
    Обработчик клика у внешнего блока.
    Если событие всплывёт из внутреннего блока вверх,
    этот обработчик тоже выполнится.
  */
  $("#outerBox").on("click", function () {
    $("#output").text(
      "Сработал click у внешнего блока #outerBox."
    );
  });

  /*
    Обработчик клика у внутреннего блока.
    stopPropagation() останавливает всплытие,
    поэтому click не дойдёт до родителя #outerBox.
  */
  $("#innerBox").on("click", function (event) {
    event.stopPropagation();

    $("#output").text(
      "Сработал click у внутреннего блока #innerBox.\n" +
      "Всплытие остановлено через stopPropagation()."
    );
  });

  /*
    Сокращённый метод click(function () { ... }) —
    это краткая форма записи события click.
  */
  $("#shortClickButton").click(function () {
    $("#output").text(
      "Событие click назначено через сокращённый метод .click()."
    );
  });

  /*
    Возврат интерфейса к начальному состоянию.
    Здесь мы очищаем поле ввода, убираем активные классы
    и возвращаем служебные элементы в исходный вид.
  */
  $("#resetBtn").on("click", function () {
    itemCounter = $("#itemList .item").length;

    $("#itemList .item").removeClass("active");
    $("#hoverBox").removeClass("hover");
    $("#keyboardInput").val("");
    $("#nameInput").val("");
    $("#keyDisplay").text("Нажатая клавиша ещё не зафиксирована.");
    $("#output").text("Состояние страницы сброшено.");
  });
});