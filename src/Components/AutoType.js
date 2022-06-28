import React, { Component } from 'react';
import Typed from 'react-typed';

class AutoType extends Component {
  render() {
    return (
      <div>
        <Typed strings={['Nanda Naufal Prayasdewo', 'Front End Developer', 'Software Engineer', 'Manual Tester']} typeSpeed={50} backSpeed={50} backDelay={1000} loop />
      </div>
    );
  }
}

export default AutoType;
