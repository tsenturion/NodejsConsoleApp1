/*
  Весь код запускается только после полной готовности DOM.
  Это гарантирует, что все элементы страницы уже существуют
  и jQuery сможет их найти по селекторам.
*/
$(function () {
  console.log("jQuery подключена:", $);

  /*
    Отдельная функция для очистки результатов предыдущих действий.
    Она убирает временные классы и возвращает исходные тексты.
  */
  function clearState() {
    $("#menu li").removeClass("highlight selected active-parent");
    $("#item").removeClass("selected current").addClass("current");
    $("#wrapper").removeClass("relative-parent");
    $("#menu a").removeClass("link-mark");

    $("#menu > li").each(function (index) {
      if (index === 0) {
        $(this).contents().first()[0].textContent = "Пункт 1";
      }

      if (index === 2) {
        $(this).contents().first()[0].textContent = "Пункт 3";
      }
    });

    $("#item").contents().first()[0].textContent = "Пункт 2\n            ";

    $("#contentBox").contents().each(function () {
      // Текстовые узлы нельзя оборачивать в jQuery-методы стилизации,
      // поэтому мы просто возвращаем текст без изменений через reset содержимого ниже.
    });

    $("#contentBox").html(`
        Текстовый узел в начале блока.
        <span class="inner-text">Вложенный span</span>
        Ещё один текстовый узел после span.
    `);

    $("#output").text("Состояние сброшено.");
  }

  /*
    find() — ищет всех потомков на любом уровне вложенности.
    Здесь мы берём контейнер #menu и находим внутри него все ссылки <a>.
  */
  $("#findBtn").on("click", function () {
    clearState();

    $("#menu")
      .find("a")
      .addClass("link-mark")
      .text("Найдено через find()");

    $("#output").text(
      "find(): внутри #menu найдены все ссылки <a> на любом уровне вложенности.\n" +
      "Метод прошёл по потомкам глубже прямых детей."
    );
  });

  /*
    children() — выбирает только прямых дочерних элементов.
    Здесь будут выделены только прямые <li> внутри #menu,
    а вложенные элементы из .sub-list не попадут в выборку.
  */
  $("#childrenBtn").on("click", function () {
    clearState();

    $("#menu")
      .children("li")
      .addClass("highlight");

    $("#output").text(
      "children(): выбраны только прямые дочерние элементы <li> у #menu.\n" +
      "Вложенные подпункты внутри .sub-list не были выбраны."
    );
  });

  /*
    closest() — поднимается вверх по DOM и ищет ближайшего предка,
    который соответствует указанному селектору.
    Здесь для #item ищем ближайший контейнер .menu-wrapper.
  */
  $("#closestBtn").on("click", function () {
    clearState();

    $("#item")
      .closest(".menu-wrapper")
      .addClass("relative-parent");

    $("#output").text(
      "closest(): от элемента #item найден ближайший предок с классом .menu-wrapper.\n" +
      "Поиск остановился на первом подходящем родителе."
    );
  });

  /*
    next() — возвращает следующий соседний элемент на том же уровне.
    Для #item следующим соседом будет третий пункт верхнего списка.
  */
  $("#nextBtn").on("click", function () {
    clearState();

    $("#item")
      .next()
      .addClass("highlight");

    $("#output").text(
      "next(): выбран следующий соседний элемент после #item.\n" +
      "Это сосед на том же уровне вложенности."
    );
  });

  /*
    prev() — возвращает предыдущий соседний элемент.
    Для #item это будет первый пункт списка.
  */
  $("#prevBtn").on("click", function () {
    clearState();

    $("#item")
      .prev()
      .addClass("highlight");

    $("#output").text(
      "prev(): выбран предыдущий соседний элемент перед #item."
    );
  });

  /*
    siblings() — выбирает всех соседей элемента, кроме него самого.
    У #item это первый и третий пункты верхнего списка.
  */
  $("#siblingsBtn").on("click", function () {
    clearState();

    $("#item")
      .siblings()
      .addClass("highlight");

    $("#output").text(
      "siblings(): выбраны все соседние элементы #item, кроме самого #item."
    );
  });

  /*
    parent() — возвращает непосредственного родителя.
    У #item родителем является список #menu.
  */
  $("#parentBtn").on("click", function () {
    clearState();

    $("#item")
      .parent()
      .addClass("active-parent");

    $("#output").text(
      "parent(): найден непосредственный родитель элемента #item.\n" +
      "В данном случае это список #menu."
    );
  });

  /*
    offsetParent() — возвращает ближайшего предка,
    который участвует в позиционировании элемента.
    Обычно это первый предок с position relative/absolute/fixed.
    У нас таким предком является .menu-wrapper,
    потому что для него задан position: relative.
  */
  $("#offsetParentBtn").on("click", function () {
    clearState();

    $("#item")
      .offsetParent()
      .addClass("relative-parent");

    $("#output").text(
      "offsetParent(): найден ближайший позиционированный предок элемента #item.\n" +
      "Здесь это .menu-wrapper с position: relative."
    );
  });

  /*
    contents() — выбирает все дочерние узлы,
    включая не только элементы, но и текстовые узлы.
    Это важное отличие от children().
  */
  $("#contentsBtn").on("click", function () {
    clearState();

    const nodes = $("#contentBox").contents();
    let report = [];

    nodes.each(function (index) {
      /*
        nodeType:
        1 — элемент
        3 — текстовый узел
      */
      if (this.nodeType === 3) {
        report.push(`Узел ${index + 1}: текстовый узел -> "${this.textContent.trim()}"`);
      } else if (this.nodeType === 1) {
        $(this).addClass("highlight");
        report.push(`Узел ${index + 1}: HTML-элемент <${this.tagName.toLowerCase()}>`);
      }
    });

    $("#output").text(
      "contents(): выбраны все дочерние узлы #contentBox, включая текстовые.\n\n" +
      report.join("\n")
    );
  });

  /*
    Дополнительный пример цепочки навигации и возврата к предыдущей выборке через end().
    Сначала переходим к родителю #item, затем выделяем его,
    потом end() возвращает нас обратно к #item, и мы выделяем уже сам элемент.
  */
  $("#chainBtn").on("click", function () {
    clearState();

    $("#item")
      .parent()
      .addClass("active-parent")
      .end()
      .addClass("selected");

    $("#output").text(
      "Цепочка + end():\n" +
      "1. Выбран #item.\n" +
      "2. Через parent() выполнен переход к родителю.\n" +
      "3. Родителю добавлен класс active-parent.\n" +
      "4. Метод end() вернул выборку обратно к #item.\n" +
      "5. Самому #item добавлен класс selected."
    );
  });

  /*
    Полный сброс интерфейса.
  */
  $("#resetBtn").on("click", function () {
    clearState();
  });
});