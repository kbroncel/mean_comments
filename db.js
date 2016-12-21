var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin1:admin2@ds139198.mlab.com:39198/posts', function(){
  console.log('Połączono');
});
module.exports = mongoose;
