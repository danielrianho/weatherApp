import React, { Component } from 'react';


import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        recentInfo: [],
        allTimeInfo: []
    };
  }

  componentDidMount(){
    Promise.all([
        fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.964850/lat/57.709330/data.json'),
        fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.964850/lat/57.709330/data.json')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
        recentInfo: data1['timeSeries'][0]['parameters'], 
        alltimeInfo: data2['geometry']['coordinates'][0][0]
    }));
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <p>{console.log(this.state.alltimeInfo)}</p>

        </div>
      </div>
    );
  }

}

export default App;
