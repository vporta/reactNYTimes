// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Require Schemas
var Article = require('./models/Article.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; 

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('./public'));

// Database configuration with mongoose
const MONGODB_URI = process.env.MONGODB_URI;
var promise = mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
  useNewUrlParser: true
});
promise.then(function(db) {
  console.log(db);
  db.on('error', function(err) {
    console.log('Database Error:', err);
  });
  db.once('open', function() {
    // we're connected!
    console.log('connected to ' + MONGODB_URI);
  });
});

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

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});