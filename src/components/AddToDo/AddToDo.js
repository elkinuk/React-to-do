import React, { Component } from 'react';
import './AddToDo.css';
import PropTypes from 'prop-types';

export class AddToDo extends Component {
  state = {
    title: '',
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addToDo = e => {
    e.preventDefault();
    if (this.state.title.length > 3) {
      this.props.addToDO(this.state.title);
      this.setState({
        title: '',
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.addToDo}>
        <input
          type="text"
          name="title"
          placeholder="Add to do item ..."
          value={this.state.title}
          onChange={this.handleInput}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

// PropTypes
AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default AddToDo;
