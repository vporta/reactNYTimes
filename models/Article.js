var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  date: {
    type: Date
  },
  url: {
    type: String,
  },
  createdAt: { 
    type: Date, 
    expires: 60, 
    default: Date.now 
  }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;