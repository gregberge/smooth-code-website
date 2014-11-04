var http = require('http');
var path = require('path');
var express = require('express');
var compress = require('compression');
var favicon = require('serve-favicon');

var app = express();
var server = http.createServer(app);

app.use(compress());
app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(path.join(__dirname, 'build/favicon.ico')));

server.listen(process.env.PORT || 8080);
