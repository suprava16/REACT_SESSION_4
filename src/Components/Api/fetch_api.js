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
    .then((res)=>(res.json()))
    .then((result)=>{
      console.log(result);
      this.setState({
        users:result.data
      })
    })
  }
  render(){
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}