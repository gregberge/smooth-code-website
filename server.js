var http = require('http');
var express = require('express');

var app = express();
var server = http.createServer(app);

app.use(express.static('./build'));

server.listen(process.env.PORT || 8080);
