var React = require('react');
var If = require('react-if-else').If;
var Else = require('react-if-else').Else;
var ElseIf = require('react-if-else').ElseIf;

/*
 * Dudes Demo
 */

var DudesDemo = require('./DudesDemo');

var myDudes = [{
  name: 'Dave',
  hungerRating: 3
}, {
  name: 'Sam',
  hungerRating: 5
}, {
  name: 'Adam',
  hungerRating: 8
}, {
  name: 'Bob',
  hungerRating: 2
}, {
  name: 'Rich',
  hungerRating: 9
}, {
  name: 'Peter',
  hungerRating: 1
}, {
  name: 'Louis',
  hungerRating: 8
}];

/*
 * Table Demo
 */
var TableDemo = require('./TableDemo');

var data = 'name|fav food|fav show|fav city\n'
+ 'kentaro|french fries|yuruyuri|sapporo\n'
+ 'rentaro|steak|gundam|tokyo\n'
+ 'kusoyaro|hamburger|furuba|chengdu\n'
+ 'mitsuki|sushi|super sentai|hong kong\n'
+ 'atsuki|mapo tofu|idolm@ster|nyc\n'
+ 'itsuki|tempura shrimp|pokemon|seattle\n'
+ 'maki|ramen|working!!|sendai\n'
+ 'kenshiro|quinoa|chuuni|nagoya\n'
+ 'momokuro|rice|moyashimon|atlanta';

var App = React.createClass({
  getInitialState: function () {
    return {
      displayDudesDemo: true
    };
  },

  _toggleDisplay: function () {
    this.setState({
      displayDudesDemo: !this.state.displayDudesDemo
    });
  },

  render: function () {
    return (
      <div className="App">
        <button className="toggle-button" onClick={this._toggleDisplay}>
          Toggle demo display
        </button>
        <If cond={this.state.displayDudesDemo}>
          <DudesDemo
            dudes={myDudes}
            dudesPerRow={3}
          />
        <Else/>
          <TableDemo
            headerFirst={true}
            data={data.split('\n')}
            delimiter="|"
          />
        </If>
      </div>
    );
  }
});

React.render(
  <App/>,
  document.body
);
