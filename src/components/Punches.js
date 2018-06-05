import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Punches extends Component {
    render() {
    let count;
   if(this.props.stats){
    count = this.props.stats.length;
   }
    return (
      <div className="Punches">
        <h5>
            Punches
        </h5>
        <h1>{count}</h1>
      </div>
    )
  }

}

Component.propTypes = {
    stats: PropTypes.array,
  }
  

export default Punches;
