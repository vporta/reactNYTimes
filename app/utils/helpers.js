/*Axios is a convenient NPM package for performing HTTP requests*/
var axios = require('axios');

// Here we have two functions for querying for user and repo information to the GitHub website.
// var article;
// var beginDate;
// var endDate;

function getA(article, beginDate, endDate){
  return axios.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +article+ '&begin_date='+beginDate+'&end_date='+endDate+'&fq=source:("The New York Times")&api-key=f91776ed061f4966bd01e763e7c0d3c7');
};




// Since we need both functions invoked at the same time..
// We lump them together inside of an object and use the axios.all function 
var helpers = {
  getGithubInfo: function(article, beginDate, endDate){
    // Axios will wait for both of these promises to get done...
    // It will then return them both as an array.
    // We will then take the object that utilizes the array to hold the bio and repos.
    return axios.get([getA(article, beginDate, endDate)])
      .then(function(arr){
        return {

          // We then want to display the repos + bios
          name: arr[0].data,
          link: arr[1].data,
          published: arr[].data
        }
      })
  }

}

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;