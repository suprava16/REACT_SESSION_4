import React from "react"

export default class Array extends React.Component{
  constructor(){
    super();
    this.state={
      arr:["ram","sita","laxman","bharat"]
    }
  }
  render(){
    return(
      <div>
        {this.state.arr.map((item,index)=>{
          return(
            <h1 key={index}>{index}-{item}</h1>
          )
        })}
      </div>
    )
  }
}