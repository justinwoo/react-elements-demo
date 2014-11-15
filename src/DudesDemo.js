var React = require('react');

var Dudes = React.createClass({
  render: function () {
    var initialRows = [];
    var rowsNeeded = Math.ceil(this.props.dudes.length / this.props.dudesPerRow);
    for (var i = 0; i < rowsNeeded; i++) {
      initialRows.push([]);
    }
    var dudes = this.props.dudes.reduce(function (aggregate, input, i) {
      var row = Math.floor(i / aggregate.dudesPerRow);
      var classNames = ['dude'];
      switch (input.hungerRating) {
        case 1:
        case 2:
        case 3:
          classNames.push('dude-happy');
          break;
        case 4:
        case 5:
        case 6:
          classNames.push('dude-not-so-happy');
          break;
        default:
          classNames.push('dude-upset');
          break;
      }
      aggregate.rows[row].push(
        <td key={input.name} className={classNames.join(' ')}>
          {input.name}
        </td>
      );
      return aggregate;
    }, {
      rows: initialRows,
      dudesPerRow: this.props.dudesPerRow
    }).rows.map(function (row, i) {
      return (
        <tr key={i} className="dudes-row">
          {row}
        </tr>
      );
    });
    return (
      <table className="dude-table">
        <tbody>
          {dudes}
        </tbody>
      </table>
    );
  }
});

var DudesDemo = React.createClass({
  getDefaultProps: function () {
    return {
      myDudes: [],
      dudesPerRow: 0
    };
  },

  render: function () {
    return (
      <div>
        <Dudes
          dudes={this.props.dudes}
          dudesPerRow={this.props.dudesPerRow}
        />
      </div>
    );
  }
});

module.exports = DudesDemo;
