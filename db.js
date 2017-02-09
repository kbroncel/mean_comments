var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://login:password@mlab.address', function(){
  console.log('Połączono');
});
module.exports = mongoose;
