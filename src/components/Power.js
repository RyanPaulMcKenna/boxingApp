import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Power extends Component {
    render() {
    let power;
    let temp = 0;
    let counter = 0; 
    var source = "";
   if(this.props.stats){
    
    this.props.stats.map(punch => {
        temp += punch.power_g;
    });
    Power = (temp / this.props.stats.length).toFixed(1); 
    
    }
    return (
      <div className="Power">
        <h5>
            Power (avg)
        </h5>
        <h1>{Power}</h1>
        <h5>
            G
        </h5>
      </div>
    )
  }

}

Component.propTypes = {
    stats: PropTypes.array,
  }
  

export default Power;
