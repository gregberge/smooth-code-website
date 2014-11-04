var http = require('http');
var express = require('express');
var compress = require('compression');
var favicon = require('serve-favicon');

var app = express();
var server = http.createServer(app);

app.use(compress());
app.use(express.static('./build'));
app.use(favicon('./build/favicon.ico'));

server.listen(process.env.PORT || 8080);
