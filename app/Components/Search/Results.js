// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');

// Include the Helper (for the query)
var helpers = require('../../utils/helpers');

// Query Component Declaration
var Results = React.createClass({

  // Here we will save states for the contents we save
  getInitialState: function(){
    return {


    }
  },

  // /*This code handles the sending of the search terms to the parent Search component*/
  handleClick: function(item, event){
    console.log("CLICKED");
    console.log(item);


  },


  // Here we render the function
  render: function(){


    // We check if the target has a "docs" value (to confirm that we aren't just running the initial data)
    if (!this.props.results.hasOwnProperty('docs')){

      return(

        <li className="list-group-item">

          <h3>
              <span><em>Enter search terms to begin...</em></span>
          </h3>

          </li>

      )

    }

    // If data is provided
    else {

      // We loop through the results and create divs for each.

        // Each article thus reperesents a list group item with a known index

    }

    return(
      <div className ="main-container">


        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">

                  {articles}

                </ul>
              </div>
            </div>

          </div>
        </div>


        


      </div>
    )

  }

});

// Export the module back to the route
module.exports = Results;