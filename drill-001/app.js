var connect = require('connect');

connect.createServer(
  connect.static(__dirname + '/public')
).listen(5001);

