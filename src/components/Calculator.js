import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import '../styles/Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div id="background">
        <Display />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
