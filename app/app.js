var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require("react-router").Route;
var Switch = require("react-router").Switch;
var hashHistory = require("react-router").hashHistory;
var routes = require('./config/routes');

// Render the contents according to the routes page.
ReactDOM.render(
  // routes will tell us which route to go to depending on which route we are looking at
  // We will drop the content into the 'app' 
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);





