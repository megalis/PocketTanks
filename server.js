var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};


function send404(response) {
  response.writehead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404 bitch!');
  response.end();
}

function sendFile(response, filePath, fileContents) {
  response.writeHead(
    200,
    {"content-type": mime.lookup(path.basename(filePath))}
  );
  response.end(fileContents);
}



http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
