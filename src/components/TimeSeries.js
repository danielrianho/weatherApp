import React, { Component } from 'react';
import moment from 'moment-timezone';

export class TimeSeries extends Component {
  render() { 

    // const test = this.props.presentDay[0]


    // const x = test.map((item) => item.values[0]);

    var m = moment()
    m.tz("Europe/Stockholm");
    m.set({minute:0,second:0})
    m.toISOString()
    var newtime = m.format('YYYY-MM-DDTHH:mm:ss')+"Z"

    // console.log(newtime);

    const temp = this.props.data.filter((item) => {

      if ( item.validTime === newtime ) {
        return( 
          item.parameters
        );
      }
    });

    // const t = temp.map((it) => it.parameters[18]);
  
    // const c = t.map((c) => c.values);
    // const temp1 = this.props.newData.map((item) => item.parameters[1]);

    // const x = temp1.map((item) => item.values[0]);

    console.log(temp);





    return (
      <div>

      </div>
    );
  }
}

export default TimeSeries;