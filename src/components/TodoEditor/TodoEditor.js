import React, { Component } from 'react';

class TodoEditor extends Component {
  state = { message: '' };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ message: e.currentTarget.value });
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
          cols="30"
          row="10"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoEditor;
