import React, { Component } from 'react';
import DayNow from './components/DayNow';
import DaySeries from './components/DaySeries';
// import TimeSeries from './components/TimeSeries';
import { GoogleComponent } from 'react-google-location'



import './App.css';
import './assets/css/weather-icons.min.css';
import './assets/css/weather-icons-wind.min.css';

const API_KEY = "AIzaSyC0kPuvy-MvqGxcSTFqNPp_431KECCyFB4"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      presentDay: [],
      data: [],
      place: null,
    };
  }

 componentDidMount(){
    Promise.all([
      fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.964850/lat/57.709330/data.json'),
      fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.964850/lat/57.709330/data.json')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
      presentDay: data1['timeSeries'][0]['parameters'], 
      data: data2['timeSeries']
    }));
  }



  render() {

    return (
      <div className="App">
       <GoogleComponent
         
          apiKey={API_KEY}
          language={'sv'}
          country={'country:in|country:swe'}
          coordinates={true}
          // locationBoxStyle={'custom-style'}
          // locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
        <div className="container">
          

          <div className="dayNow">
            {console.log(this.state.presentDay)}
            <DayNow presentDay={this.state.presentDay} />
          </div>
          <div className="daysFuture">
            <DaySeries  data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
