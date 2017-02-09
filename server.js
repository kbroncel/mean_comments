var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));

var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log('server is listening at: ' + port)
});
