var React = require('react');

var Main = React.createClass({   // create Component
  render: function(){
    return (
      <div>
        Hello World
      </div>
    )
  }
});

React.render(<Main />, document.getElementById('app'));
