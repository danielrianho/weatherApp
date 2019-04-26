import React, { Component } from 'react';
import moment from 'moment-timezone';
import DayOne from './DayOne';
import DayTwo from './DayTwo';
import DayThree from './DayThree';


export class DaySeries extends Component {
  render() {

    // const firstDay = this.props.firstDay.map((data) => data.values[0]);

    // const firstDayTemp = firstDay[1];

    // const secondDay = this.props.secondDay.map((data) => data.values[0]);
    
    // const secondDayTemp = secondDay[1];

    // const thirdDay = this.props.thirdDay.map((data) => data.values[0]);
    
    // const thirdDayTemp = thirdDay[1];

    // const validTime = this.props.data.map((time) => time.validTime);

    // const newDate2 = new String(validTime[24]);

    // const test = new String(newDate2.substr(8));

    // const newDate3 = new String(validTime[48]);

    // // const test2 = new String(newDate3.substr(8));

    // // console.log(test2.substr(0, 2));

    // console.log(newDate3);

    var m = moment()
    m.tz("Europe/Stockholm");
    m.set({hour:12,minute:0,second:0})
    m.toISOString()
    m.add(1, 'days');
    var newtime = m.format('YYYY-MM-DDTHH:mm:ss')+"Z"

    // console.log(newtime)

    const value = this.props.data.filter((time) => {

      if ( time.validTime === newtime ) {
        return( 
          time.parameters
        );
      }

    })

    var m2 = moment()
    m2.tz("Europe/Stockholm");
    m2.set({hour:12,minute:0,second:0})
    m2.toISOString()
    m2.add(2, 'days');
    var newtime2 = m2.format('YYYY-MM-DDTHH:mm:ss')+"Z"

    const value2 = this.props.data.filter((time) => {

      if ( time.validTime === newtime2 ) {
        return( 
          time.parameters
        );
      }

    })

    var m3 = moment()
    m3.tz("Europe/Stockholm");
    m3.set({hour:12,minute:0,second:0})
    m3.toISOString()
    m3.add(3, 'days');
    var newtime3 = m3.format('YYYY-MM-DDTHH:mm:ss')+"Z"

    const value3 = this.props.data.filter((time) => {
      // console.log(newtime3)
      if ( time.validTime === newtime3 ) {
        return( 
          time.parameters
        );
      }

    })
    

     // console.log( ntest )



     // console.log(c)



    // const date = new Date();

    // const test = date.toISOString().split(':')[0]+"";

    // console.log(test);

    

    // const day1 = new String( new Date(date.getTime() + 86400000));

    // const newDay1 = day1.substr(4, 11);

    // const day2 = new String(new Date(date.getTime() + 172800000));

    // const newDay2 = day2.substr(4, 11);

    // const day3 = new String(new Date(date.getTime() +  259200000));

    // const newDay3 = day3.substr(4, 11);

    // const newDay = () => {
    //   switch(day){
    //     case 1:
    //       return <h1>Måndag</h1>
    //     case 2:
    //       return <h1>Tisdag</h1>
    //     case 3:
    //       return <h1>Onsdag</h1>
    //     case 4:
    //       return <h1>Torsdag</h1>
    //     case 5:
    //       return <h1>Fredag</h1>
    //     case 6:
    //       return <h1>Lördag</h1>
    //     case 7:
    //       return <h1>Söndag</h1>
    //     default:
    //       return "Vilken dag som helst";
    //   }
    // }


    // const test = parseInt(date.toISOString().slice(11, 13)) + 24;


    
    

    return (
      <div className="grid">
        <div className="firstDay">
          <DayOne newData={ value } />
        </div>
        <div className="secondDay">
          <DayTwo newData2={value2} />
        </div>
        <div className="thirdDay">
          <DayThree newData3={value3} />
        </div>
      </div>
    );
  }
}

export default DaySeries;

