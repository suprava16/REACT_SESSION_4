import React from "react"
export default class Child extends React.Component{
  
  componentDidMount(){
    console.log("hello from Component did mount method");
  }
  render(){
    console.log("hello from render function");
    return(
      <div>
       <h1>child component</h1>
       <h2>hello</h2>
      </div>
    )
  }
} 