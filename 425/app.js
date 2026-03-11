const http = require('http');

const server = http.createServer((req, res) => {
    res.write('ответ от сервера');
    res.end();
});

server.listen(3000, () => {
    console.log('сервер запущен на порту 3000');
});