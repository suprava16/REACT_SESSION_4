import React from "react"
export default class Child extends React.Component{
  constructor(){
    super()
    this.state={
      input_text:""
    }
  }
  
  componentDidMount(){
    console.log("hello from Component did mount method");
  }
  handleChange=(event)=>{
    this.setState({
      input_text:event.target.value
    })
  }
  componentDidUpdate(){
    console.log("hello from component did update function");
  }
  componentWillUnmount(){
    console.log("hello from component will unmount function");
  }
  render(){
    console.log("hello from render function");
    return(
      <div>
       <h1>child component</h1>
       <h2>hello</h2>
       <input onChange={this.handleChange}/>
      </div>
    )
  }
} 