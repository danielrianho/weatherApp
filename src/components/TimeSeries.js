import React, { Component } from 'react';
import cloudy from '../img/5_Cloudy_sky.png';
import clear from '../img/1_Clear_sky.png';
import halfClear from '../img/4_Halfclear_sky.png';
import modRain from '../img/Moderate_rain_showers.png';
import modSnow from '../img/Moderate_snow_showers.png';


export class TimeSeries extends Component {
  render() { 

    const found = this.props.presentDay.map((data) =>  
      data.values[0]
    );

    const symbol = found[18];

    const newImg = () => {
      switch(symbol){
        case 1:
          return <img alt={"clear"} width="200" height="200" src={clear} />
        case 3:
          return <img alt={"cloudy"} width="200" height="200" src={cloudy} />
        case 4:
          return <img alt={"halfClear"} width="200" height="200" src={halfClear} />
        case 5:
          return <img alt={"cloudy"} width="200" height="200" src={cloudy} />
        case 9:
          return <img alt={"modRain"} width="200" height="200" src={modRain} />
        case 16:
          return <img alt={"modSnow"} width="200" height="200" src={modSnow} />
        default:
          return <img alt={"clear"} className="standard" width="200" height="200" src={clear} />
      }
    }

    const degrees = found[11];

    const wind = found[14];

    const precipitation = found[5];

    const date = new Date();

    const year = date.getFullYear();

    const newYear = <h1>{ year }</h1>

    const newDate = date.getDate();

    const newDateNum = <h1>{ newDate }</h1>

    const day = date.getDay();
   
    const newDay = () => {
      switch(day){
        case 1:
          return <h1>Måndag</h1>
        case 2:
          return <h1>Tisdag</h1>
        case 3:
          return <h1>Onsdag</h1>
        case 4:
          return <h1>Torsdag</h1>
        case 5:
          return <h1>Fredag</h1>
        case 6:
          return <h1>Lördag</h1>
        case 7:
          return <h1>Söndag</h1>
        default:
          return day;
      }
    }

    const month = date.getMonth();

    const newMonth = () => {
      switch(day){
        case 0:
          return <h1>Januari</h1>
        case 1:
          return <h1>Februari</h1>
        case 2:
          return <h1>Mars</h1>
        case 3:
          return <h1>April</h1>
        case 4:
          return <h1>Maj</h1>
        case 5:
          return <h1>juni</h1>
        case 6:
          return <h1>Juli</h1>
        case 7:
          return <h1>Augusti</h1>
        case 8:
          return <h1>September</h1>
        case 9:
          return <h1>Oktober</h1>
        case 10:
          return <h1>November</h1>
        case 11:
          return <h1>December</h1>
        default:
          return month;
      }
    }

    return (
      <div>
        { newDay() }{ newMonth() }{ newDateNum }{ newYear }
        { newImg() }
        <h1>{ degrees }˚  C</h1>
        <h2>Vind: { wind } m/s </h2>
        <h2>Nederbörd: { precipitation } mm </h2>
      </div>
    );
  }
}

export default TimeSeries;
