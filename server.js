const http = require('http');

http.createServer((reqest, response) => {
  console.log('Request received.');
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello Wurld');
  response.end();
}).listen(8888);

console.log('Server has started ∆');
