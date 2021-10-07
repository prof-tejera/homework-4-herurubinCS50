import { Component } from "react";
import './calculator.css'


import Number from "../Number/Number";
import Operator from "../Operator/Operator";
import Screen from "../Screen/Screen";

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseInt(this.state.first);
      const second = parseInt(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      }
    } else if (operator === "clear") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  settings = {
    numericalBtnWidth : '20%'
  }

  render() {
    return (
      <>
        <Screen value={this.getScreenValue()} />
        <div className="calcu-face" style={{ display: "flex" }}>
          <div className="numerical-inputs">
            <Number width={this.settings.numericalBtnWidth} value={1} onClick={this.handleNumberClick} />
            <Number width={this.settings.numericalBtnWidth} value={2} onClick={this.handleNumberClick} />
            <Number width={this.settings.numericalBtnWidth}  value={3} onClick={this.handleNumberClick} />
            <Number width={this.settings.numericalBtnWidth}  value={4} onClick={this.handleNumberClick} />
            <Number width={this.settings.numericalBtnWidth}  value={5} onClick={this.handleNumberClick} />
            <Number width={this.settings.numericalBtnWidth}  value={6} onClick={this.handleNumberClick} />
            <Number width={this.settings.numericalBtnWidth}  value={7} onClick={this.handleNumberClick} />
            <Number width={this.settings.numericalBtnWidth}  value={8} onClick={this.handleNumberClick} />
            <Number width={this.settings.numericalBtnWidth}  value={9} onClick={this.handleNumberClick} />
            <Number width={this.settings.numericalBtnWidth}  value={0} onClick={this.handleNumberClick} />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <Operator value="+" onClick={this.handleOperatorClick} />
            <Operator value="/" onClick={this.handleOperatorClick} />
            <Operator value="x" onClick={this.handleOperatorClick} />
            <Operator value="-" onClick={this.handleOperatorClick} />
            <Operator value="=" onClick={this.handleOperatorClick} />
            <Operator value="clear" onClick={this.handleOperatorClick} />
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
