import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import '../styles/Calculator.css';

class Calculator extends React.Component {
  state = { result: 'HELLO' };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ result: 'WORLD!' });
    }, 30000);
  }

  render() {
    return (
      <div id="background">
        <Display output={this.state.result} />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
