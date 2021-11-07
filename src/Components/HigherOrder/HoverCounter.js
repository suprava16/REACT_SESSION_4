import React, { Component } from 'react'
import ParentCounter from './ParentCounter'
export class HoverCounter extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.handleIncrement}>hover {this.props.count} times</button>
      </div>
    )
  }
}

export default ParentCounter(HoverCounter,3)
