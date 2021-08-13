import React from "react"

export default class ChangeEvent extends React.Component{
  constructor(){
    super();
    this.state={
      username:"",
      email:"",
      password:""
    }
  }

  handleUsername=(event)=>{
    this.setState({
      username:event.target.value
    })
  }

  handleEmail=(event)=>{
    this.setState({
      email:event.target.value
    })
  }

  handlePassword=(event)=>{
    this.setState({
      password:event.target.value
    })
  }
  
  render(){
    return(
      <div>
        <input type="text" placeholder="enter username" onChange={this.handleUsername}/><br/>
        <input type="text" placeholder="enter email" onChange={this.handleEmail}/><br/>
        <input type="text" placeholder="enter password" onChange={this.handlePassword}/>

        <h1>name:{this.state.username}</h1>
        <h1>name:{this.state.email}</h1>
        <h1>name:{this.state.password}</h1>
      </div>
    )
  }
}