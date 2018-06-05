import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Speed extends Component {
    render() {
    let speed;
    let temp = 0;
    let counter = 0; 
   if(this.props.stats){
    
    this.props.stats.map(punch => {
        temp += punch.speed_mph;
    });
    speed = (temp / this.props.stats.length).toFixed(1); 
    }
    return (
      <div className="Speed">
        <h5>
            Speed (avg)
        </h5>
        <h1>{speed}</h1>
        <h5>
            MPH
        </h5>
      </div>
    )
  }

}

Component.propTypes = {
    stats: PropTypes.array,
  }
  

export default Speed;
