$(function () {
  console.log("jQuery подключена:", $);

  /*
    Вспомогательная функция для вывода сообщений.
    Она нужна, чтобы все статусы запросов показывались в одном месте.
  */
  function setOutput(message, isError = false) {
    $("#output")
      .toggleClass("error", isError)
      .text(message);
  }

  /*
    1. Универсальный AJAX-запрос через $.ajax()
    Загружаем локальный JSON-файл с комментариями.
  */
  $("#loadCommentsBtn").on("click", function () {
    $("#comments").addClass("loading").text("Идёт загрузка комментариев...");

    $.ajax({
      url: "comments.json",
      type: "GET",
      dataType: "json"
    })
      .done(function (data) {
        $("#comments").empty();

        data.forEach(function (comment) {
          /*
            Для безопасности выводим пользовательский текст через text(),
            а не вставляем строку напрямую через html().
          */
          const $comment = $("<p></p>");
          $comment.text(comment.text);
          $("#comments").append($comment);
        });

        setOutput("Комментарии успешно загружены через $.ajax() и .done().");
      })
      .fail(function (xhr, status, error) {
        $("#comments").text("Не удалось загрузить комментарии.");
        setOutput("Ошибка загрузки комментариев: " + error, true);
      })
      .always(function () {
        $("#comments").removeClass("loading");
        console.log("Запрос комментариев завершён.");
      });
  });

  /*
    2. Упрощённый метод $.getJSON()
    Он автоматически ожидает JSON и преобразует его в объект JavaScript.
  */
  $("#loadJsonBtn").on("click", function () {
    $("#jsonList").empty();
    setOutput("Загрузка JSON через $.getJSON()...");

    $.getJSON("comments.json", function (data) {
      data.forEach(function (item, index) {
        const $li = $("<li></li>");
        $li.text("Элемент " + (index + 1) + ": " + item.text);
        $("#jsonList").append($li);
      });
    })
      .done(function () {
        setOutput("Список успешно загружен через $.getJSON().");
      })
      .fail(function (xhr, status, error) {
        setOutput("Ошибка при загрузке JSON: " + error, true);
      });
  });

  /*
    3. Подгрузка HTML-фрагмента через .load()
    В контейнер вставляется содержимое файла fragment.html.
  */
  $("#loadFragmentBtn").on("click", function () {
    $("#fragmentContainer").text("Идёт загрузка HTML-фрагмента...");

    $("#fragmentContainer").load("fragment.html .fragment-block", function (response, status, xhr) {
      if (status === "error") {
        setOutput("Ошибка загрузки HTML-фрагмента: " + xhr.statusText, true);
        $("#fragmentContainer").text("Фрагмент загрузить не удалось.");
      } else {
        setOutput("HTML-фрагмент успешно загружен через .load().");
      }
    });
  });

  /*
    4. Отправка формы через AJAX.
    Стандартная отправка формы отменяется, а данные уходят через POST-запрос.
    serialize() собирает поля формы в строку запроса.
  */
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    /*
      Простейшая клиентская валидация перед AJAX-запросом.
    */
    if (name === "" || email === "" || message === "") {
      $("#result").text("Все поля формы должны быть заполнены.");
      setOutput("Форма не отправлена: заполнены не все поля.", true);
      return;
    }

    $("#result").text("Отправка формы...");
    setOutput("Выполняется AJAX POST-запрос формы...");

    $.ajax({
      url: $(this).attr("action"),
      type: "POST",
      data: $(this).serialize(),
      dataType: "json"
    })
      .done(function (response) {
        /*
          Сервер JSONPlaceholder возвращает объект с созданной записью.
        */
        $("#result").html(
          "<b>Форма успешно отправлена.</b><br>" +
          "ID новой записи: " + response.id
        );

        setOutput("Форма успешно отправлена через $.ajax() с методом POST.");

        /*
          После успешной отправки очищаем поля формы.
        */
        $("#contactForm")[0].reset();
      })
      .fail(function (xhr, status, error) {
        $("#result").text("При отправке формы произошла ошибка.");
        setOutput("Ошибка отправки формы: " + error, true);
      })
      .always(function () {
        console.log("AJAX-отправка формы завершена.");
      });
  });

  /*
    5. Упрощённый GET-запрос через $.get()
  */
  $("#simpleGetBtn").on("click", function () {
    setOutput("Выполняется простой GET-запрос...");

    $.get("comments.json", function (data) {
      console.log("Данные GET:", data);
    })
      .done(function () {
        setOutput("GET-запрос через $.get() выполнен успешно.");
      })
      .fail(function (xhr, status, error) {
        setOutput("Ошибка GET-запроса: " + error, true);
      });
  });

  /*
    6. Упрощённый POST-запрос через $.post()
    Используется внешний тестовый endpoint.
  */
  $("#simplePostBtn").on("click", function () {
    setOutput("Выполняется простой POST-запрос...");

    $.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "Тестовая запись",
        body: "Отправлено через $.post()",
        userId: 1
      },
      function (response) {
        console.log("Ответ POST:", response);
      },
      "json"
    )
      .done(function () {
        setOutput("POST-запрос через $.post() выполнен успешно.");
      })
      .fail(function (xhr, status, error) {
        setOutput("Ошибка POST-запроса: " + error, true);
      });
  });
});