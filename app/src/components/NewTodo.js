import React, { Component } from 'react';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onKeyDown(event) {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        if (this.state.value !== '') {
          this.props.onCommit(this.state.value.trim());
        }
        this.setState({ value: '' });
        break;
      case 'Escape':
        event.preventDefault();
        this.setState({ value: '' });
        break;
      default:
      // noop
    }    
  }
  
  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default NewTodo;