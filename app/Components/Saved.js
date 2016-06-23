var React = require('react');

var Search = React.createClass({
  getInitialState: function() {
    return {
      name: "I am the Search component"
    }
  },
  render: function() {
    return (
      <div className="container">
        <h1 className="searchBox">{this.props.name}</h1>
      </div>
    )
  }
});

module.exports = Search;