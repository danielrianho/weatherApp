import React, { Component } from 'react';

export class DaySeries extends Component {
  render() {

    const day = this.props.futureDays.map((data) => data.validTime )

    console.log(day);

    return (
      <div></div>
    );
  }
}

export default DaySeries;
