const promise = new Promise((resolve, reject) => {
    const success = true; // Измените на false, чтобы увидеть отклонение
    if (success) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Произошла ошибка.");
    }
});

/*
'use strict';

// в httpGet обратимся к несуществующей странице
httpGet('/page-not-exists')
  .then(response => JSON.parse(response))
  .then(user => httpGet(`https://api.github.com/users/${user.name}`))
  .then(githubUser => {
    githubUser = JSON.parse(githubUser);

    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        img.remove();
        resolve();
      }, 3000);
    });
  })
  .catch(error => {
    alert(error); // Error: Not Found
  });
  .finally(() => {
    console.log("Операция завершена.");
  });
*/