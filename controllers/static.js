var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
  res.sendFile(path.resolve('./sites/posts.html'));
})

router.use(express.static(__dirname + '/../assets'))

module.exports = router;
