// To run: `node basic.js` in console
var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-type': 'text/html'});
  response.write('<html><head><title>Yeahhh</title></head><body>');
  response.write("I'm learning node");
  response.write('<br>');
  response.write('user agent: ' + request.headers['user-agent']);
  response.write('</body></html>')
  response.end();
});

server.listen(8000);