import React, { Component } from 'react'
import Header from './header'

class TodoList extends Component {
  state = {
    undoList: []
  }

  addUndo = (value) => {
    this.setState(state => ({
      undoList: [...state.undoList, value]
    }))
  }

  render() {
    const { undoList } = this.state
    return (
      <div className="todo-list">
        <Header addUndoItem={this.addUndo} />
        {
          undoList.map((item, index) => {
            return (
              <div key={index}>{item}</div>
            )
          })
        }
      </div>
    );
  }
}

export default TodoList;