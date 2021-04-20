import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';


class Intensity extends Component{
  render() {
    return (
      <div className="Line">
        <h3>Intensity</h3>
        <Line 
            data={this.props.data}
            width={100}
            height={50}
            options={{
                maintainAspectRatio: true      
          }}
         
        />
      </div>
    );
  }

};

export default Intensity;