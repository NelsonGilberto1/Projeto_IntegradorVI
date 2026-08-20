const http = require('http');
const hostname = '0.0.0.0';//Poderia ser o 127.0.0.1 se voce quiser que fosse na maquina local, mas como é no git tem que ser o 0.0.0.0
const port = 3000; // a pota padrao do node e a 3000.

// o primeiro semple e o request (a requisicao) e depois tem que vir o response (a resposta).
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('banana\n');
});
//codar o cdigo e ele reflitir automaticamente sem que ele tenha que abrir e feixar.
server.listen(port, hostname, () => {
    console.log('Servidor rodadndo em http://${hostname}:${port}/');
});

