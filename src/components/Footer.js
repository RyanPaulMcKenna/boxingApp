import React, { Component } from 'react';

class Footer extends Component {
  
  render() {

    return (
      <div className="Footer">
      <div>
        {/*Progress timer bar  */}
      </div>
       <h3> {this.props.countDown} | Reset </h3> 
        
      </div>
    );
  }
}


  
export default Footer;