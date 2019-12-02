import React, { Component } from 'react';
import cloudy from '../img/5_Cloudy_sky.png';
import clear from '../img/1_Clear_sky.png';
import halfClear from '../img/4_Halfclear_sky.png';
import modRain from '../img/Moderate_rain_showers.png';
import modSnow from '../img/Moderate_snow_showers.png';
import moment from 'moment-timezone';

class DayNow extends Component {
  render() {

    


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

    //

     const symbol = this.props.presentDay.filter((item) => {

      if ( item.name === 'Wsymb2' ) {
        return( 
          item.name
        );
      }
    });

    const symbol2 = symbol.map((item) => item.values[0]);

    const newSymbol = symbol2[0];

    console.log(newSymbol);


    var m = moment()
    m.tz("Europe/Stockholm");
    m.toISOString()
    var hour = m.format('HH');
    // console.log(hour);
    // var hour = m.format('HH:mm');

     // console.log(newtime);


    const newImg = () => {
     if ( hour < 4 ) {
        switch(newSymbol){
          case 1:
            return <i className="wi wi-day-sunny"></i>;
          case 3:
             return <i data className="3 wi wi-day-cloudy"></i>;
          case 4:
            return  <i className="4 wi wi-day-cloudy"></i>;
          case 5:
            return <img className="day-cloudy2" alt={"cloudy"} width="200" height="200" src={cloudy} />
          case 8:
            return  <i className="wi wi-day-sunny"></i>;
          case 19:
            return <img className="day-rain"  alt={"modRain"} width="200" height="200" src={modRain} />
          case 26:
            return <img className="day-snow" alt={"modSnow"} width="200" height="200" src={modSnow} />
          break;
        }
        
      } else if ( hour < 20 ) {

        switch(newSymbol){
          case 1:
            return <i className="wi wi-night-clear"></i>;
          case 3:
            return <i className="3 wi wi-day-cloudy"></i>;
          case 4:
            return <i className="4 wi wi-day-cloudy"></i>
          case 5:
            return <img className="day-cloudy2" alt={"cloudy"} width="200" height="200" src={cloudy} />
          case 8:
            return  <i className="wi wi-day-sunny"></i>
          case 19:
            return <img className="day-rain"  alt={"modRain"} width="200" height="200" src={modRain} />
          case 26:
            return <img className="day-snow" alt={"modSnow"} width="200" height="200" src={modSnow} />
          break;
        }

      } else {

         switch(newSymbol){
          case 1:
            return <i className="wi wi-day-sunny"></i>;
          case 3:
            return <i className="3n wi wi-night-alt-cloudy"></i>;
          case 4:
            return <i className="4n wi wi-day-cloudy"></i>
          case 5:
            return <img className="night-cloudy2" alt={"cloudy"} width="200" height="200" src={cloudy} />
          case 8:
            return  <i className="wi wi-day-sunny"></i>
          case 19:
            return <img className="night-rain" alt={"modRain"} width="200" height="200" src={modRain} />
          case 26:
            return <img className="night-snow" alt={"modSnow"} width="200" height="200" src={modSnow} />
          break;
        }
      }
    }


    console.log();

    return (
      <div>
        <div className="todayCity">
          <h2>Göteborg</h2>
        </div>
        <div className="temp">
          { newTemp }°
        </div>
        <div className="todayIcon">
          <div className="divTodayIcon">
            { newImg() }
          </div>
        </div>
        <ul>
          <li className="todayInfo">
            <div>
              Nederbörd { newMedPreci } mm
            </div>
            <div>
              Luftfukt. { newHumidity }% 
            </div>
            <div>
              Vind { newWind }
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default DayNow;