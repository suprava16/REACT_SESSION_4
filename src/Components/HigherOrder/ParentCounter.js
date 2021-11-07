import React, { Component } from 'react'
// export default function ParentCounter(OriginalCounter){
  export default function ParentCounter(OriginalCounter,incrementedvalue){
  // higher order component returns a new component and receives original component as an argument
   class NewComponent extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        count: 0
      }
    }
    handleIncrement = () => {
      this.setState(prevState => {
          return ({
            count: prevState.count + incrementedvalue
          })
        }
      )
    }
  
    render() {
      return (
          <OriginalCounter 
          count={this.state.count}
           handleIncrement={this.handleIncrement}
           {...this.props} //to pass the rest of the props passing in app component
            />
      )
    }
  }
  return NewComponent
}