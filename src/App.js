import React, { Component } from 'react';
import $ from 'jquery'
import boxingData from './data/boxing';
import Header from './components/Header';
import Footer from './components/Footer';
import Punches from './components/Punches';
import Speed from './components/Speed';
import Power from './components/Power';
import Intensity from './components/Intensity';
import Breakdown from './components/Breakdown';
import { getIndexOfMaxInSet, getIndexOfMinInSet, toBinsToGoalRate, toBins, toTotalseconds, getRightHandData, getLeftHandData, getMaxInSet, getMinInSet} from './timeLibrary';
import { Chart, defaults } from 'react-chartjs-2';
import './App.css';


let interval;
class App extends Component {
  constructor(props){
    super(props);
      
      this.state = {
        stats: [],
        number: 1,
        countDown: '01'+":"+'00',   
        // Line Chart properties
        itensitydata: {},
        lhData:{},
        rhData: {}
      }
      
    }


  getPunches(){ 
    this.setState({stats: boxingData});
  }

  setGlobalGraphSettings(){
      defaults.global.title.enabled = false;
    defaults.global.legend.display = false;
    Chart.scaleService.defaults.linear.ticks.display = false;
  }

  getIntensityGraphData(){
    const lineGraphDataset = {      
      labels: ['','','', '1:00','', '','', '2:00','','', '', '3:00',],
      datasets: [         
        {
          
          label: 'Intensity',
          fill: false,
          lineTension: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(225,0,0,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(225,0,0,0)',
          pointBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: toBinsToGoalRate(toBins(boxingData,12),100),
          options: {
            scales: {
              yAxes: [{
                  ticks: {
                      display: false
                  }
              }]
              }
          }
        },
        //Goal Line
        {
          fill: false,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(225,225,0,1)',
          pointBorderColor: 'rgba(225,0,0,0)',
          data: [100,100,100,100,100,100,100,100,100,100,100,100]
        }
      ]
  
    }
    this.setState({itensitydata: lineGraphDataset }); 
  }

  getRightHandGraphData(){
    const rhdata = {
      labels: ['C','H','U'],
      datasets: [{
          backgroundColor: 'rgba(0,0,225,1)',
          borderColor: 'rgba(0,0,225,1)',
          borderWidth: 1,
          data: getRightHandData(boxingData)
      }]
    };
      this.setState({rhData: rhdata});
  }

  getLeftHandGraphData(){
    const lhdata = {
    labels: ['J','H','U'],
    datasets: [{
        backgroundColor: 'rgba(0,225,0,1)',
        borderColor: 'rgba(0,225,0,1)',
        borderWidth: 1,
        data: getLeftHandData(boxingData),
      
    }]
  };
    this.setState({lhData: lhdata});
  }
  
    //Life-Cycle-Method/function
  componentWillMount(){
    this.getPunches();
    this.setGlobalGraphSettings();
    this.getIntensityGraphData();
    this.getRightHandGraphData();
    this.getLeftHandGraphData();
    interval = setInterval(() => {
          this.tick(); 
  }, 1000);

}

  componentWillUnmount(){
    clearInterval(interval);
  }

  tick = () => {
    let count = this.state.countDown.split(':',2);
    if(count[0] == '01'){
      count[0] = '00';
      count[1] = '59';
    }else{
      let sec = parseInt(count[1]);
      sec--;
      count[1] = sec.toString();
      if(sec < 10)
        count[1] = '0'+count[1];
      if(sec < 0){
        count[0] = '01';
        count[1] = '00';
      }
    }
    this.setState({countDown: count[0]+':'+count[1]});

  }
  render() {
    return (
      <div className="App">
        <Header number={this.state.number} />
        <Intensity data={this.state.itensitydata} />
        <Punches stats={this.state.stats} />
        <Speed stats={this.state.stats} />
        <Power stats={this.state.stats} />
        <Breakdown lhdata={this.state.lhData} rhdata={this.state.rhData}/>
        <Footer  countDown={this.state.countDown} />
      </div>
    );
  }
}

export default App;