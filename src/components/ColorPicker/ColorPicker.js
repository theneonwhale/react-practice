import React, { Component } from 'react';

import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [s.option];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push(s.optionActive);
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionIdx];

    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <p>Chosen color: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => {
                  this.setActiveIdx(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
