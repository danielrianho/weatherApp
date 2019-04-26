import React, { Component } from 'react';
import TimeSeries from './components/TimeSeries';
import DaySeries from './components/DaySeries';


import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      presentDay: [],
      data: []
    };
  }
z
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
        <div className="container">
          <div>
            {console.log(this.state.data)}
            <TimeSeries data={this.state.data} />
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
