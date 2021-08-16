import React from "react"

class SetStateMethod extends React.Component{
  constructor(){
    super();
   this.state={
      name:"suprava",
      email:"suprava@gmail.com"
    }
  }

  handleClick=()=>{
    this.setState({
      name:"supriya",
      email:"supriya@gmail.com"
    })
  }

  handleReset=()=>{
    this.setState({
      name:"",
      email:""
    })
  }
  render(){
    const {name,email}=this.state
    return(
      <div>
        <h1>name={name}</h1>
        <h1>email={email}</h1>
        <button onClick={this.handleClick}>click me</button>
        <button onClick={this.handleReset}>Reset</button>

      </div>
    )
  }
}
export default SetStateMethod