import React, { Component } from 'react'

class TodoList extends Component {
  state = {
    value: '',
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleInputKeyUp = (e) => {
    const { value } = this.state
    if (e.keyCode === 13 && value) {
      this.props.addUndoItem(value)
      this.setState({value: ''})
    }
  }

  render() {
    const { value } = this.state

    return (
      <div className="header">
        <input type="text" data-test="input" value={value} onChange={this.handleInputChange} onKeyUp={this.handleInputKeyUp} />
      </div>
    );
  }
}

export default TodoList;