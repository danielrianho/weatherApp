import React, { Component } from 'react';
import moment from 'moment-timezone';
import DayNow from './DayNow';

export class TimeSeries extends Component {
  render() { 

    // const test = this.props.presentDay[0]


    // const x = test.map((item) => item.values[0]);

    // var m = moment()
    // m.tz("Europe/Stockholm");
    // m.set({minute:0,second:0})
    // m.toISOString()
    // var newtime = m.format('YYYY-MM-DDTHH:mm:ss')+"Z"

    // // console.log(newtime);

    // const temp = this.props.data.filter((item) => {

    //   if ( item.validTime === newtime ) {
    //     return( 
    //       item.parameters
    //     );
    //   }
    // });

    // const now = [temp[0]];

     
    // console.log(now.map((it) => it.parameters));
    // console.log(now)

    // const t = temp.map((it) => it.parameters[18]);
  
    // const c = t.map((c) => c.values);
    // const temp1 = this.props.newData.map((item) => item.parameters[1]);

    // const x = temp1.map((item) => item.values[0]);

    

    const temp = this.props.presentDay.filter((item) => {

      if ( item.name === 't' ) {
        return( 
          item.name
        );
      }
    });

    const temp2 = temp.map((item) => item.values[0]);

    const newTemp = Math.round(temp2[0]);

    //

    const medPreci = this.props.presentDay.filter((item) => {

      if ( item.name === 'pmedian' ) {
        return( 
          item.name
        );
      }
    });

    const medPreci2 = medPreci.map((item) => item.values[0]);

    const newMedPreci = Math.round(medPreci2[0]);

    //

    const humidity = this.props.presentDay.filter((item) => {

      if ( item.name === 'r' ) {
        return( 
          item.name
        );
      }
    });

    const humidity2 = humidity.map((item) => item.values[0]);

    const newHumidity = Math.round(humidity2[0]);


    //


    const wind = this.props.presentDay.filter((item) => {

      if ( item.name === 'ws' ) {
        return( 
          item.name
        );
      }
    });

    const wind2 = wind.map((item) => item.values[0]);

    const newWind = Math.round(wind2[0]);


    console.log();

    return (
        <ul>
          <li className="todayCity">
            Göteborg
          </li>
          <li className="temp">
            { newTemp }°
          </li>
          </li>
          </li>
          <li>
             Nederbörd { newMedPreci } mm
          </li>
          <li>
            Luftfukt. { newHumidity }% 
          </li>
          <li>
            Vind { newWind } 
          </li>
        </ul>
    );
  }
}

export default TimeSeries;