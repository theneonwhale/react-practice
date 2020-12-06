import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    surname: '',
    experience: '1',
    licence: false,
  };
  nameInputId = shortid.generate();
  surnameInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', surname: '' });
  };
  handleLicenceChecked = event => {
    this.setState({ licence: event.currentTarget.checked });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.surnameInputId}>
          Surname
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
            id={this.surnameInputId}
          />
        </label>
        <p>Your level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="1"
            onChange={this.handleChange}
            checked={this.state.experience === '1'}
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="2"
            onChange={this.handleChange}
            checked={this.state.experience === '2'}
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="3"
            onChange={this.handleChange}
            checked={this.state.experience === '3'}
          />
          3
        </label>

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChecked}
          />
          Agree
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
