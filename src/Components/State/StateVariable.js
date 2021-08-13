import React from "react"

class StateVariable extends React.Component{
  constructor(){
    super();
    this.state={
      name:"suprava",
      email:"suprava@gmail.com"
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.email}</h1>
      </div>
    )
  }
}
export default StateVariable

