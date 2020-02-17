const http = require('http');
// importando um módulo externo próprio
const greetings = require('./greetings');
const rotas = require('./rotas');

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(rotas[req.url] || `${greetings.hello}, your server is on`);
});

server.listen(3000, 'localhost', () => {
    console.log('server is on');
});