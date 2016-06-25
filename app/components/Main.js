var React = require('react');
var Router = require('react-router');
var Link = require('react-router');
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
              <li><a href="#/search">Search</a></li>
              <li><a href="#/saved">Saved Articles</a></li>
            </ul>
          </div>
        </nav>
          <div className="jumbotron">
            <h1>(REACTJS) New York Times Article Search</h1> 
            <p>Search for and save articles of interest.</p> 
          </div> 
          {this.props.children}

          <footer>
            <hr />
            <p className="pull-right"><i className="fa fa-github" aria-hidden="true"></i> Proudly built using React.js</p>
          </footer>
        </div>
    )
  }
})

module.exports = Main;