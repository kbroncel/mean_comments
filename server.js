var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));


app.listen(8000, function(){
  console.log('serwer slucha na 8000')
});
