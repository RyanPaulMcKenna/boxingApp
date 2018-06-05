import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  
  render() {

    return (
      <div className="Header">
       <h2>  Round {this.props.number} </h2>
    
      </div>
    );
  }
}

Component.propTypes = {
    number: PropTypes.number,
  }

  
export default Header;