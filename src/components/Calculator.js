import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import PaperLog from './PaperLog';
import '../styles/General.css';
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
    this.setState({ result: 0 });
  }

  equalKeyPress = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const result = eval.call(null, this.state.result);
    const logEntry = `${this.state.result} = ${result}`;
    this.setState({
      log: this.state.log.concat(logEntry).slice(-5),
      result: result
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ result: 0 });
    }, 500);
  }

  render() {
    return (
      <div className="ui grid">
        <div id="calculator" className="four wide computer six wide tablet six wide mobile column">
          <Display output={this.state.result} />
          <Keypad keyPressFn={this.keyPress} deleteKeyFn={this.deleteKeyPress} calculateFn={this.equalKeyPress} />
        </div>
        <div id="paperlog" className="three wide computer four wide tablet six wide mobile column">
          <PaperLog output={this.state.log} />
        </div>
      </div>
    );
  }
}

export default Calculator;
