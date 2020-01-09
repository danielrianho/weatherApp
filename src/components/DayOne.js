import React, { Component } from 'react';

class DayOne extends Component {
  render() {

    const temp = this.props.newData.map((item) => item.parameters);

    const x = Math.round(temp.map((item) => item.values[0]));

    console.log(temp);

    // const ned = this.props.newData.map((item) => item.parameters[1]);


    // const ws = this.props.newData.map((item) => item.parameters[4]);

    // const ws2 = Math.round(ws.map((item) => item.values[0]));

    // console.log(x)

    return (
      <div>
        <ul>
          <li>
            { x }°
          </li>
        </ul>
      </div>
    );
  }

}

export default DayOne;