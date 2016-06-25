var React = require('react');
var Link = require('react-router');
var Saved = React.createClass({
  getInitialState: function() {
    return {
      name: "I am the Saved component"
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

module.exports = Saved;