import React from "react"

export default class Post_api extends React.Component{
  constructor(){
    super();
    this.state={
      email:"",
      password:"",
      token:""

    }
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

  handleClick=()=>{
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    }).then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
      alert(result.token)
    })
  }
  render(){
    return(
      <div>
        <input type="text" onChange={this.handleEmail} placeholder="enter email"/>
        <input type="password" onChange={this.handlePassword} placeholder="enter password"/>
        <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}