/*
var connect = require('connect');

connect.createServer(
  connect.static(__dirname + '/public')
).listen(3000);
*/

var http = require('http');
var connect = require('connect');
var directory = 'public';
var port = 5007;

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static(directory));

http.createServer(app).listen(port, function(){
  console.log('Node server listening on port ' + port);
});
