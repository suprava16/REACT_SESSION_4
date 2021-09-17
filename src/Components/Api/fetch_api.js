import React from "react"

export default class FetchApi extends React.Component{
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result.data)
      this.setState({
        users:result.data
      })
    })

  }
  render(){
    console.log(this.state.users)
    return(
      <div>
        {this.state.users.map((u,index)=>{
          return(
            <>
            <h1>{u.first_name}</h1>
            <img src={u.avatar} alt="images"></img>
            </>
          )
        })}
      </div>
    )
  }
}