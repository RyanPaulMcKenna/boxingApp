import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2';

class Breakdown extends Component {
  render() {
    return (
     
      <div className="Breakdown">
        <h3>Type Breakdown</h3>
        <div className="LeftHandChart">
        <HorizontalBar 
            data={this.props.lhdata}
            width={140}
            height={100}
            options={{
                maintainAspectRatio: false      
          }} />
          </div>
          <div className="RightHandChart">
           <HorizontalBar 
            data={this.props.rhdata}
            width={140}
            height={100}
            options={{
                maintainAspectRatio: false      
          }} />
          </div>
      </div>
    )
  }
}

export default Breakdown;