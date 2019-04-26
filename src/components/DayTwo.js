import React, { Component } from 'react';

class DayTwo extends Component {
  render() {

    const temp = this.props.newData2.map((item) => item.parameters[1]);

    const x = temp.map((item) => item.values[0]);

    const ws = this.props.newData2.map((item) => item.parameters[4]);

    const ws2 = ws.map((item) => item.values[0]);

    // console.log(x)

    return (
      <div>
        <ul>
          <li>
            { x }
          </li>
          <li>
            { ws2 }
          </li>
        </ul>
      </div>
    );
  }

}

export default DayTwo;