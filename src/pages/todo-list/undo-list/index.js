import React, { Component } from 'react'

import './index.css'
class UndoList extends Component {
  state = {
    value: '',
  }

  render() {
    const { value } = this.state

    return (
      <div className="undo-list">
        
      </div>
    );
  }
}

export default UndoList;