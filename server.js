// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Require Schemas
var Article = require('./models/Article.js');

// Create Instance of Express
var app = express();
var PORT = 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------
// Database configuration with mongoose

// var NYTSearch_db = 'mongodb://localhost/NYTSearch_db';

// if (process.env.MONGODB_URI) {
//   console.log('THIS IS THE HEROKU MONGODB URI =====> ' + process.env.MONGODB_URI);
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect(NYTSearch_db);
// }
  
// var db = mongoose.connection;

// db.on('error', function(err) {
//   console.log('Database Error:', err);
// });

// db.once('open', function() {
//   // we're connected!
//   console.log('connected to ' + NYTSearch_db);
// });
// // MongoDB Configuration configuration
mongoose.connect('mongodb://heroku_dzqdjbpp:m4q2mgf93oiqlk2h0os6ocgq3s@ds139655.mlab.com:39655/heroku_dzqdjbpp');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});



// -------------------------------------------------

// Main Route
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

// Route to get all saved articles
app.get('/api/saved', function(req, res) {

  Article.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

// Route to add an article to saved list
app.post('/api/saved', function(req, res){
  var newArticle = new Article(req.body);

  console.log(req.body)

  var title = req.body.title;
  var date = req.body.date;
  var url = req.body.url;

  newArticle.save(function(err, doc){
    if(err){
      console.log(err);
    } else {
      res.send(doc._id);
    }
  });
});

// Route to delete an article from saved list
app.delete('/api/saved/', function(req, res){

  var url = req.param('url');

  Article.find({"url": url}).remove().exec(function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});


// -------------------------------------------------

app.listen(process.env.PORT || 3000, function() {
  console.log("App listening on PORT: " + PORT);
});
