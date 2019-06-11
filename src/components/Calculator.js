import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import '../styles/Calculator.css';

class Calculator extends React.Component {
  state = { result: 'HELLO', log: [] };

  keyPress = (e) => {
    e.preventDefault();
    let prevStateValue = this.state.result;
    prevStateValue === 0 ? this.setState({ result: e.target.value }) : this.setState({ result: prevStateValue += e.target.value });
  }

  deleteKeyPress = (e) => {
    e.preventDefault();
    let currentLog = this.state.log;
    console.log(currentLog);
    this.setState({ result: 0 });
    console.log(this.state);
  }

  equalKeyPress = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const result = eval.call(null, this.state.result);
    const logEntry = `${this.state.result}=${result}`;
    this.setState({
      log: this.state.log.concat(logEntry).slice(-5),
      result: result
    });
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ result: 0 });
    }, 500);
  }

  render() {
    return (
      <div id="background">
        <Display output={this.state.result} />
        <Keypad keyPressFn={this.keyPress} deleteKeyFn={this.deleteKeyPress} calculateFn={this.equalKeyPress} />
        <div>{this.state.log}</div>
      </div>
    );
  }
}

export default Calculator;
