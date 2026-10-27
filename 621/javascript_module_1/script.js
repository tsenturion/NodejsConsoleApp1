Promise.reject(new Error("Данные недоступны"))
    .catch(error => {
        console.log(error.message);
        return "Резервные данные";
    })
    .then(data => {
        console.log(data);
    });