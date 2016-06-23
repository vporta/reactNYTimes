var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var router = require('./config/routes');
var Main = require('./Components/Main');
// var Search = require('./components/SearchNYT.js');

// Grab the property associated with the Router
// var Router = require('react-router').Router;

// Grabs the "routes"
var routes = require('./config/routes');

// Render the ccontents according to the routes page.
ReactDOM.render(
  // routes will tell us which route to go to depending on which route we are looking at
  // We will drop the content into the 'app' 
  <Router>{routes}</Router>,
  <Main />, 
  document.getElementById('app')
)





