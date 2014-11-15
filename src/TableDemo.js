var React = require('react');

function getConvertStringToElements(delimiter) {
  return function (string, constructor) {
    return string.split(delimiter).map(function (a, i) {
      return constructor(
        <span className="table-demo-span">{a}</span>,
        i
      );
    });
  }
}

function thConstructor(a, i) {
  return (<th key={i}>{a}</th>);
}

function tdConstructor(a, i) {
  return (<td key={i}>{a}</td>);
}

var TableDemo = React.createClass({
  render: function () {
    var headerFirst = this.props.headerFirst;
    var convertStringToElements = getConvertStringToElements(this.props.delimiter);
    var output = this.props.data.reduce(function (agg, inp, i) {
      if (headerFirst && i === 0) {
        agg.header.push(
          <tr key={i}>
            {convertStringToElements(inp, thConstructor)}
          </tr>
        );
      } else {
        agg.rows.push(
          <tr key={i}>
            {convertStringToElements(inp, tdConstructor)}
          </tr>
        );
      }
      return agg;
    }, {
      header: [],
      rows: []
    });
    return (
      <table className="table-demo-table">
        <thead className="table-demo-head">
          {output.header}
        </thead>
        <tbody className="table-demo-body">
          {output.rows}
        </tbody>
      </table>
    );
  }
});

module.exports = TableDemo;
