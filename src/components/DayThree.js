import React, { Component } from 'react';

class DayThree extends Component {
  render() {

    const temp = this.props.newData3.map((item) => item.parameters[1]);

    const x = Math.round(temp.map((item) => item.values[0]));


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

export default DayThree;