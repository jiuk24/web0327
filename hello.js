var http = require('http');

function requestCallbackFunction (req, res) {
  // if(req.url === '/favicon.ico') {
  //   console.log('Favicon was requested');
  // } else {
    console.log('hello');
  // }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! WORLD HELLO');
}

var server = http.createServer(
  requestCallbackFunction
);

server.listen(8080);
