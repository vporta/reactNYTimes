var React = require('react');
var Router = require('react-router');
var Search = require("./Search")

var Main = React.createClass({

  getInitialState: function() {
    return {
      name: "I am the main component"
    }
  },
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
          <div className="mainBox">
            <h1>Components</h1>
            <Search mainsName={this.state.name} />
          </div>
        </div>
    )
  }
})

module.exports = Main;