var mongoose = require('mongoose');
var nytreact_db = 'mongodb://localhost/nytreact_db';
//Database configuration
mongoose.connect(nytreact_db);

var db = mongoose.connection;

db.once('open', function() {
  // we're connected!
  console.log('connected to ' + nytreact_db);
});

db.on('error', function(err) {
  console.log('Database Error:', err);
});

module.exports = mongoose;