var axios = require('axios');

// /* NYT API Key*/
var API_KEY = process.env.API_KEY;

// // Helper Functions (in this case the only one is runQuery)
var helpers = {

//   // This will run our query.
  runQuery: function(term, start, end){

//     // Adjust to get search terms in proper format
    var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";


    console.log("Query Run");
//     // Run a query using Axios. Then return the results as an object with an array.
//     // See the Axios documentation for details on how we structured this with the params.
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': "plTT2mqQh2TZdjdB7m2kblVNkBLTB5pr",
          'q': term,
          'begin_date': start,
          'end_date': end     
      }
    })
    .then(function(results){
      console.log("Axios Results", results.data.response);
      return results.data.response;
    }).catch(function(error) {
      console.log(error)
    });

  },

  getSaved: function(){

    return axios.get('/api/saved')
      .then(function(results){
        console.log("axios results", results);
        return results;
      })
  },

  postSaved: function(title, date, url){

    var newArticle = {title: title, date: date, url: url};
    return axios.post('/api/saved', newArticle)
      .then(function(results){
        console.log("axios results", results._id);
        return results._id;
      })

  },

  deleteSaved: function(title, data, url){

    return axios.delete('/api/saved', {
      params: {
          'title': title,
          'data': data,
          'url': url,
      }
    })
    .then(function(results){
      console.log("axios results", results);
      return results;
    })
  }

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;