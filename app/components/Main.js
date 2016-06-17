var React = require('react');
var Searches = require('./components/Searches');

var Results = require('./components/Search/Results');
var Query = require('./components/Search/Query');
var Saved = require('./components/Search/Saved');

var Main = React.createClass({
  render: function() {
    return (
        <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">NYT React</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">Saved Articles</a></li> 
            </ul>
          </div>
        </nav>
          <div className="jumbotron">
            <h1>(REACTJS) New York Times Article Search</h1> 
            <p>Search for and save articles of interest.</p> 
          </div>
        </div>
    )
  }
});

module.exports = Main;