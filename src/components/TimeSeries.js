import React, { Component } from 'react';


export class TimeSeries extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.timeSeries}</p>
        <p>{ this.props.temperature}</p>
      </div>
    );
  }
}

export default TimeSeries;

