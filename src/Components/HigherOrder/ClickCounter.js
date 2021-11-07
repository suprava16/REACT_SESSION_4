import React, { Component } from 'react'
import ParentCounter from './ParentCounter'
export class ClickCounter extends Component {
 
  // handleIncrement=()=>{
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }
  render() {
    return (
      <div>
        <button onClick={this.props.handleIncrement}>Clicked {this.props.count} times</button>
      
      </div>
    )
  }
}

export default ParentCounter(ClickCounter,5)
