import React from 'react';
import Controls from './Controls';
import Value from './Value';

import s from './Counter.css';

class Counter extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = { value: 0 };
  //   }

  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    //--
  };
  state = { value: this.props.initialValue };

  handleIncrement = e => {
    console.log('Click on increase');
    console.log(this);
    // console.log(e.target);
    const { target } = e;
    setTimeout(() => {
      console.log(target);
    }, 1000);
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  handleDecrement = e => {
    console.log('Click on decrease');
    console.log(this);
    console.log(e);
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };
  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />
        {/* <span className="Counter_value">{this.state.value}</span> */}
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="Counter_controls">
          <button type="button" onClick={this.handleIncrement}>
            Increase by 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrease by 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
